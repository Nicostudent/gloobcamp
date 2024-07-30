import UsersCard from "@/components/UsersCard";
const AboutUs = () => {
  return (
    <section id="aboutus">
      <h2 className="text-3xl font-bold text-primary">Our Team</h2>
      <p>Our team is made up of experienced developers and designers.</p>

      <div className="grid grid-cols-4">
        <UsersCard picture="/leonardo.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
        <UsersCard picture="/nico.webp" />
      </div>
    </section>
  );
};

export default AboutUs;
