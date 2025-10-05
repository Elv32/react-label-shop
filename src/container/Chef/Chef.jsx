import { SubHeading } from '../../Components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding"id="artist">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Don's word" />
      <h1 className="headtext__cormorant">Vigilant Watch Over the Streets</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The biggest goal is to be rich without anyone knowing that I am rich..</p>
        </div>
        <p className="p__opensans"> Jahn Don is a Haitian born Musician based in Miami. Prior to Don’s music career, he built a reputation as a basketball star in his inner city of North Miami. Don's Music brings relatable narratives to the industry, Jahn Don has collaborated with producers and Artists around the world to introduce new sounds to the rap game. With his unique flow and eloquent Caribbean accent, Don is changing the way listeners consume rap. With high anticipation, Don latest project "Looking Out For The Streets" (LOFTS) is expected to bridge the gap between Afrobeat & Hip Hop Rap. </p>
      </div>
    </div>
  </div>
);

export default Chef;