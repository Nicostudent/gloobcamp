import Image from "next/image";

const UsersCard = ({ picture }) => {
  return (
    <div className="bg-white max-w-fit pb-4">
      <Image
        src={picture}
        alt="Picture of the User"
        width={500}
        height={500}
        className="size-72"
      />

      <h3 className="text-xl">
        Leonardo <span className="font-bold">Valdez</span>
      </h3>
      <p className="text-gray-600">Frontend Developer</p>
    </div>
  );
};

export default UsersCard;
