import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { addCollection } from '../redux/whishlistSlice';

export default function AddCollection({ open, setOpen }) {
    const [newCollectionName, setNewCollectionName] = useState('');
    const collections = useSelector((state) => state.wishlist.collections);
    const dispatch = useDispatch();

    const handleCreateCollection = () => {
        console.log("checkinggg branch");
        
        if (newCollectionName.trim()) {
            dispatch(addCollection({ name: newCollectionName }));
            setNewCollectionName('');
            setOpen(false)
            //   setShowModal(false);
        }
    };
    // const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className='' >
                                <p className='text-[16.04px] font-medium' >Create Collection</p>
                                <div className='mt-16' >
                                    <input value={newCollectionName}
                                        onChange={(e) => setNewCollectionName(e.target.value)} placeholder='Type name here...' type='text' className='w-full border-b font-semibold outline-none py-2 text-[14px] placeholder:text-[14px] placeholder:font-normal' />

                                </div>
                                <div className='flex mt-6 gap-2' >
                                    <button onClick={() => setOpen(false)} className='w-1/2 border border-black rounded-[6.4px] p-[12px] font-semibold text-[12px]' >
                                        Cancel
                                    </button>
                                    <button onClick={handleCreateCollection} className='w-1/2 border text-white bg-black rounded-[6.4px] p-[12px] font-semibold text-[12px]' >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
