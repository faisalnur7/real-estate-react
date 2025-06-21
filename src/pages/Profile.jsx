import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, updateUserProfile } = useContext(UserContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile({
                displayName: name,
                photoURL: photoURL,
            });
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile.");
        }
    };

    useEffect(() => {
        setName(user?.displayName || "");
        setPhotoURL(user?.photoURL || "");
    }, [user]);

    return (
        <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleUpdate} className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Your Profile</h2>

                <div className="mb-4 text-center">
                    <img
                        src={photoURL || "https://i.ibb.co/2FsfXqM/blank-avatar.jpg"}
                        alt="Profile"
                        className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold dark:text-gray-200">Name</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-semibold dark:text-gray-200">Email (read-only)</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        value={user?.email}
                        readOnly
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-1 text-sm font-semibold dark:text-gray-200">Photo URL</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary w-full">Save Changes</button>
            </form>
        </div>
    );
};

export default Profile;
