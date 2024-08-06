import UserCard from "./UserCard";
import teamMembers from "@/utils/team-members.json";
const MapUsers = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <UserCard
            key={member.name}
            picture={member.image}
            name={member.name}
            lastname={member.lastname}
            position={member.position}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default MapUsers;
