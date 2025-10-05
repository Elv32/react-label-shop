import { SubHeading } from '../../Components';
import { images } from '../../constants';
import { Link } from 'react-router-dom'; // Import Link from React Router

import './Chef3.css';

const Chef3 = () => (
  <div className="app__bg app__wrapper section__padding" id="artist">
  <Link to="/viewbio"> {/* Link to the viewbio page */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.artist6} alt="chef_image" />
    </div>
  </Link>
    <div className="app__wrapper_info">
      <SubHeading title="31 SOVAJ's world" />
      <h1 className="headtext__cormorant">Meet 31 Sovaj</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">31 SOVAJ has signed with  SAWCE MUSIC GROUP to release his solo career projects, where they have collaborations with ATB and many more.</p>
        </div>
        <p className="p__opensans"> 31 Sovaj transitioned from a former recording group to pursue a solo career under Sawce Music Group (SMG) Label.
Joining forces with SMG Label, 31 Sovaj discovered newfound artistic freedom, blending Haitian roots with contemporary sounds.
Under SMG, he swiftly released two captivating singles, showcasing his resilience and unique musical style.
Currently crafting his debut EP, slated for a 2024 release, 31 Sovaj promises a journey into self-discovery and artistic evolution.
As a solo artist, 31 Sovaj emerged as a rising force, promising.
 </p>
      </div>
    </div>
  </div>
);

export default Chef3;