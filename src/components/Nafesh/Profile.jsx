import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
} from "../../features/actions/ProfileActions";

const FreelancerProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setLocation(user.location);
      setEnglishLevel(user.englishLevel);
      setGender(user.gender);
      setPhone(user.phone);
      setAbout(user.about);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        name,
        email,
        location,
        englishLevel,
        gender,
        phone,
        about,
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex">
          <img
            className="h-24 w-24 rounded-full object-cover mr-4"
            src="https://via.placeholder.com/100"
            alt={name}
          />
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Freelancer</p>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{location}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  English Level
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{englishLevel}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Gender</dt>
                <dd className="mt-1 text-sm text-gray-900">{gender}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">{phone}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="col-span-2 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">About Me</h3>
          <p className="mt-2 text-gray-600">{about}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
          <div className="mt-2">
            <p className="text-gray-600">
              <strong>Email:</strong> {email}
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900">Edit Profile</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="englishLevel"
                className="block text-sm font-medium text-gray-700"
              >
                English Level
              </label>
              <input
                id="englishLevel"
                type="text"
                value={englishLevel}
                onChange={(e) => setEnglishLevel(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              About Me
            </label>
            <textarea
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreelancerProfile;
