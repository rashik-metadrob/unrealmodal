import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import MyBag from "../Components/MyBag";
import ProductInfo from "../Components/ProductInfo";
import LikedProducts from "../Components/LikedProducts";
import { Navigate, useNavigate } from "react-router-dom";
import StorePage from "./StorePage";
import ThreeNav from "../Components/ThreeNav";
import WelcomeComponent from "../Components/WelcomeComponent";
import SoundModalComponent from "../Components/SoundModalComponent";
import SliderModalComponent from "../Components/SliderModalComponent";
import ProductModal from "../Components/ProductModal"
import ProductImg from "/suit.jpg";
import ProductSecondImg from "/travel.png";
import Rings from "../../public/rings.png";

import exitModel from "../../public/exit.glb?url";
import entryModel from "../../public/entry.glb?url";
import endLeftModel from "../../public/end_left.glb?url";
import endRightModel from "../../public/end_right.glb?url";
import frontLeftModel from "../../public/front_left.glb?url";
import frontRightModel from "../../public/front_right.glb?url";
import middleLeftModel from "../../public/middle_left.glb?url";
import middleRightModel from "../../public/middle_right.glb?url";
import OrderConfirm from "../Components/OrderConfirm";
import SecurePayment from "./SecurePaymentPage";
import AddAddressPage from "./AddAddressPage";
import SecurePayment2Page from "./SecurePayment2Page";
import OrderConfirmPage from "./OrderConfirmPage";

const ThreejsScene = ({ page }) => {
  const [openCartPage, setOpenCartPage] = useState(false);
  const [openBag, setOpenBag] = useState(true);
  const mountRef = useRef(null);
  const navigate = useNavigate();

  const [item, setItem] = useState({
    id: 1,
    quantity: "1",
    name: "Bronze Yellow Men's Regular Fit Three Piece Suit",
    brand: "Raymond’s",
    price: 10899,
    oldPrice: 14899,
    ratings: 32,
    images: [
      ProductImg, // First image
      ProductSecondImg,
      ProductImg,
    ],
    colors: ["#8C3E44", "#E54242", "#34C4CD", "#1B32A9"],
    sizes: [32, 34, 36, 38],
    material: "Tuxedo",
    fitType: "Regular Fit",
    style: "Open front",
    origin: "India",
    description:
      "Welcome to Ovalista, the premier virtual showroom designed to elevate your online retail experience. Meticulously crafted, Ovalista combines cutting-edge 3D modeling with intuitive navigation to create a visually stunning and user-friendly environment.",
  });

  let currentModel = null;
  const originalFOV = 50;

  const modelFiles = {
    exit: exitModel,
    entry: entryModel,
    end_left: endLeftModel,
    end_right: endRightModel,
    front_left: frontLeftModel,
    front_right: frontRightModel,
    middle_left: middleLeftModel,
    middle_right: middleRightModel,
  };

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000000
    );

    // minor distance to allow orbiting
    camera.position.set(0, 0, 0.0001);

    // on load camera view angle
    camera.position.set(
      -0.00006977306784401454,
      -0.0000013089595571341343,
      0.00007162405760994225
    );

    camera.rotation.set(
      0.01827338331770974, // X-axis rotation in radians
      -0.7722247390173297, // Y-axis rotation in radians
      0.012750628425680314 // Z-axis rotation in radians
    );
    camera.fov = originalFOV;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 1);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    const textureLoader = new THREE.TextureLoader();
    let ringsTexture = textureLoader.load(Rings);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const pointer = new THREE.Vector2();

    const gltfLoader = new GLTFLoader();

    const navigatorMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        color: { value: new THREE.Color(0x000000) },
        borderColor: { value: new THREE.Color(0xffffff) },
        staticStroke: { value: 0.2 },
        pulseStroke: { value: 0.1 },
      },
      vertexShader: `
      varying vec2 vUv;
 
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,
      fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform vec3 borderColor;
      uniform float staticStroke;
      uniform float pulseStroke;
 
      varying vec2 vUv;
 
      float sdSquare(vec2 p, float size) {
          vec2 d = abs(p) - size;
          return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
      }
 
      void main() {
          vec2 p = vUv * 2.0 - 1.0;
 
          // === Static square ===
          float staticSize = 1.0;
          float staticD = sdSquare(p, staticSize); // Distance to static square edge
          float staticBorder = smoothstep(staticStroke - 0.01, staticStroke + 0.01, abs(staticD));
          vec3 staticColor = mix(borderColor, color, staticBorder);
 
          // === Pulsing emission square ===
          float pulseInterval = mod(time, 2.0); // Restart every second
          pulseInterval *= 0.6;
          float pulseSize = 0.4 + pulseInterval * 0.8; // Pulse grows with time
 
          float pulseD = sdSquare(p, pulseSize); // Distance to pulse edge
          float pulseBorder = smoothstep(pulseStroke - 0.01, pulseStroke + 0.01, abs(pulseD));
          float pulseAlpha = 1.0 - pulseInterval; // Fade out as pulse grows
          vec3 pulseColor = mix(borderColor, color, pulseBorder) * pulseAlpha;
 
          // Combine the static square and the pulsing square
          vec3 finalColor = staticColor + pulseColor;
          float finalAlpha = max(1.0 - staticBorder, pulseAlpha * (1.0 - pulseBorder));
 
          // Set the final fragment color with smooth alpha blending
          gl_FragColor = vec4(finalColor, finalAlpha);
      }
  `,
      transparent: true,
    });

    const renderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.UnsignedByteType,
      }
    );

    renderTarget.texture.colorSpace = THREE.SRGBColorSpace;

    let isTransitioning = false; // Track if a transition is active

    const transitionPlaneGeo = new THREE.PlaneGeometry(2, 2);
    const transitionMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: renderTarget.texture },
        opacity: { value: 1.0 }, // Full opacity initially
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float opacity;
        varying vec2 vUv;

        vec3 toSRGB(vec3 color) {
            return pow(color, vec3(1.0 / 2.2)); // Convert from linear to sRGB
        }

        void main() {
            vec4 color = texture2D(uTexture, vUv);
            color.rgb = toSRGB(color.rgb); // Apply sRGB conversion
            gl_FragColor = vec4(color.rgb, color.a * opacity); // Apply fade opacity
        }

    `,
      transparent: true,
    });

    const transitionPlane = new THREE.Mesh(
      transitionPlaneGeo,
      transitionMaterial
    );
    scene.add(transitionPlane);
    transitionPlane.visible = true; // Hide initially

    function loadModel(modelName) {
      if (isTransitioning) return; // Prevent multiple transitions at the same time
      isTransitioning = true;

      // Capture the current frame with the current camera settings
      renderer.setRenderTarget(renderTarget);
      renderer.render(scene, camera); // Render into the render target
      renderer.setRenderTarget(null); // Reset back to default framebuffer

      if (currentModel) {
        // Use GSAP to smoothly zoom out, capturing the transition correctly
        gsap.to(camera, {
          fov: 40, // Zoom-in effect
          duration: 0.5,
          onUpdate: () => {
            camera.updateProjectionMatrix(); // Update projection matrix on each frame
            // Render into the render target during the transition
            renderer.setRenderTarget(renderTarget);
            renderer.render(scene, camera);
            renderer.setRenderTarget(null); // Reset back to default framebuffer
          },
          onComplete: () => {
            disposeModel(currentModel); // Remove the old model
            currentModel = null;
            loadNewModel(modelName); // Load the new model after transition
          },
        });
      } else {
        loadNewModel(modelName); // Directly load the new model if no current model
      }
    }

    function loadNewModel(modelName) {
      console.log(modelName, "model name is coming");

      transitionPlane.visible = true; // Show the transition plane
      transitionMaterial.uniforms.opacity.value = 1.0; // Reset opacity

      gltfLoader.load(modelFiles[modelName], (gltf) => {
        const model = gltf.scene;
        currentModel = model;

        model.traverse((child) => {
          if (child.isMesh) {
            // console.log(`Child Name: ${child.name}`);

            if (
              [
                "man_left",
                "man_right",
                "hanger_left",
                "hanger_middle",
                "hanger_right",
              ].includes(child.name)
            ) {
              child.material = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                map: ringsTexture,
                color: 0xffffff,
                transparent: true,
              });
              child.scale.setScalar(0.009); // Scale down
            }

            const material = child.material;
            if (material.map) {
              material.map.generateMipmaps = false;
              material.map.minFilter = THREE.LinearFilter;
              material.map.magFilter = THREE.LinearFilter;
            }

            if (
              [
                "end_left",
                "end_right",
                "entry",
                "exit",
                "front_left",
                "front_right",
                "middle_left",
                "middle_right",
              ].includes(child.name)
            ) {
              child.material = navigatorMaterial;
              child.userData.targetModel = `${child.name}.glb`; // Store target model
            }
          }
        });

        scene.add(model);

        transitionIn(); // Animate the new model in

        // Fade out the transition plane after the model is visible
        gsap.to(transitionMaterial.uniforms.opacity, {
          value: 0.0,
          duration: 0.5,
          onComplete: () => {
            transitionPlane.visible = false; // Hide the plane after fade-out
            isTransitioning = false; // End the transition
          },
        });
      });
    }

    function disposeModel(model) {
      scene.remove(model);
      model.traverse((child) => {
        // console.log(`removed objects from previous: ${child.name}`);

        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material.map) child.material.map.dispose();

          if (child.material.isMaterial) {
            cleanMaterial(child.material);
          }

          child.material.dispose();
        }
      });
    }

    const cleanMaterial = (material) => {
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          mat.dispose();
        });
      } else {
        material.dispose();
      }
    };

    function transitionIn() {
      gsap.timeline().to(
        camera,
        {
          fov: originalFOV, // Reset FOV back to 50
          duration: 0.5,
          onUpdate: () => {
            camera.updateProjectionMatrix(); // Sync camera projection
            renderer.setRenderTarget(renderTarget);
            renderer.render(scene, camera); // Render during transition
            renderer.setRenderTarget(null);
          },
        },
        "<"
      ); // Run FOV reset at the same time as scaling
    }

    loadModel("exit");

    const onMouseClick = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(
        currentModel.children,
        true
      );

      if (intersects.length > 0) {
        const object = intersects[0].object;

        if (object?.userData?.targetModel) {
          const targetModelName = object.userData.targetModel.replace(
            ".glb",
            ""
          );
          loadModel(targetModelName); // Load the new model
        } else if (
          [
            "man_left",
            "man_right",
            "hanger_left",
            "hanger_middle",
            "hanger_right",
          ].includes(object.name)
        ) {
          // console.log(`Info spot clicked: ${object.name}`);
          setOpenBag(true);
        }
      }
    };

    let clock = new THREE.Clock();
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      navigatorMaterial.uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const groundMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
    const groundGeo = new THREE.PlaneGeometry(100000, 100000);
    let groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = Math.PI / 2;
    groundMesh.position.y = -400;
    groundMesh.visible = false;
    groundMesh.name = "ground";
    scene.add(groundMesh);

    let hoverRing = null;

    function createHoverRing() {
      const ringGeo = new THREE.RingGeometry(4, 5, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        color: 0xffffff,
        depthTest: false,
        depthWrite: false,
      });
      hoverRing = new THREE.Mesh(ringGeo, ringMat);
      hoverRing.rotation.x += Math.PI / 2;
      hoverRing.visible = false;
      hoverRing.scale.setScalar(10);
      hoverRing.renderOrder = 999;

      scene.add(hoverRing);
    }

    createHoverRing();

    function updateHoverRing(intersectPoint) {
      const offset = 0.1;
      hoverRing.position.copy(intersectPoint);
      hoverRing.position.y += offset;
      hoverRing.visible = true;
    }

    function hideHoverRing() {
      hoverRing.visible = false;
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(groundMesh);

      if (intersects.length > 0) {
        const intersectPoint = intersects[0].point;
        updateHoverRing(intersectPoint);
      } else {
        hideHoverRing();
      }
    });

    // Add event listeners
    window.addEventListener("click", onMouseClick);
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  const [currentModal, setCurrentModal] = useState("welcome");

  const handleSliderModalClose = () => {
    setCurrentModal("welcome");
    console.log('hi');

  };

  const handleEnterClick = () => {
    setCurrentModal("sound");
  };

  const handleSoundModalClose = () => {
    setCurrentModal("slider");
  };

  useEffect(() => {
    if (openCartPage) {
      navigate("/secure-payment");
    }
  }, [openCartPage, navigate]);

  const isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));
  const [firstUser, setFirstUser] = useState(false);
  useEffect(() => {
    if (!isUserLoggedIn) {
      localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
      setFirstUser(true);
    }
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          bgColor: "white",
          cursor: "pointer",
        }}
      />
      <ThreeNav />
      <ProductModal open={openBag} setOpen={setOpenBag} item={item} />
      {firstUser && (
        <div>
          {currentModal === "welcome" && (
            <WelcomeComponent onEnter={handleEnterClick} />
          )}
          {currentModal === "sound" && (
            <SoundModalComponent onClose={handleSoundModalClose} />
          )}
          {currentModal === "slider" && (
            <SliderModalComponent onClose={handleSliderModalClose} />
          )}
        </div>
      )}
      {page == "OrderConfirmPage" && <>
        <OrderConfirmPage home />
      </>}
      {page == "securePayment" && <>
        <SecurePayment home />
      </>}
      {page == 'addAddress' && <>
        <AddAddressPage home />
      </>}
      {page == "SecurePayment2Page" && <>
        <SecurePayment2Page home />
      </>}
    </>
  );
};

export default ThreejsScene;  