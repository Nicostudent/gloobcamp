import UsersCard from "@/components/UsersCard";
import teamMembers from "@/utils/team-members.json";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <h2 className="text-3xl font-bold text-primary">Our Team</h2>
      <p>Our team is made up of experienced developers and designers.</p>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <UsersCard
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
    </section>
  );
};

export default AboutUs;
