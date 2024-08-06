import SubTitle from "@/components/Writing/SubTitle.jsx";
import Paragraph from "@/components/Writing/Paragraph.jsx";
import MapUsers from "@/components/UserCard/MapUsers.jsx";

const AboutUs = () => {
  return (
    <section className="space-y-4 py-24">
      <SubTitle>A little introduction of Our Project</SubTitle>
      <Paragraph>
        Introduction Lorem ipsum odor amet, consectetuer adipiscing elit.
        Aliquam nostra orci euismod cursus efficitur vehicula. Neque aliquet
        condimentum amet tortor faucibus cubilia. Metus cubilia quis id magna
        porttitor. Pulvinar facilisi quis adipiscing class risus. Et orci
        accumsan feugiat ad suspendisse. Lobortis sapien amet consequat
        hendrerit fusce nec molestie. Litora ut pharetra rutrum pharetra
        molestie sit accumsan in. Sit per lobortis auctor neque; mattis gravida
        penatibus montes taciti. Ante magna blandit at scelerisque ipsum.
        Interdum curabitur platea nulla ridiculus sed suscipit himenaeos.
        Maximus ad consequat semper magnis tellus ullamcorper id fringilla? Ex
        nisi at lacus venenatis ultrices magnis tincidunt ullamcorper. Tempor
        aliquet sodales morbi facilisi est blandit natoque odio. Primis egestas
        elementum vitae sodales ac. Consequat ipsum himenaeos facilisi dolor
        nisl aliquam habitasse massa. Eros tellus senectus eros tempus aptent
        molestie amet. Neque hendrerit iaculis accumsan justo pellentesque
      </Paragraph>
      <SubTitle>Our Team</SubTitle>
      <Paragraph>
        Our team Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet
        augue natoque mi sit pulvinar etiam imperdiet convallis. Suspendisse
        aliquet ad a a himenaeos nisl? Quis elit nam at habitasse mus enim arcu.
        Laoreet velit dictumst neque ullamcorper habitant.
      </Paragraph>

      <MapUsers />
    </section>
  );
};

export default AboutUs;
