import { SubHeading } from '../../Components';
import { images } from '../../constants';
import './Chef4.css';

const Chef4 = () => (
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
        <p className="p__opensans"> Jahn Don, the celebrated hip-hop/rap MC under the saWce Music Group banner, has etched a remarkable journey that spans continents, echoing the resilience and dynamism of his life's narrative. Born in Port Au Prince, Haiti, Jahn's early life was marked by adversity as he tragically lost his father shortly after his birth. His family, seeking a new beginning, immigrated to the United States, settling in the vibrant city of Miami, FL when Jahn was just six years old.

The cultural tapestry of his upbringing, coupled with the indomitable spirit inherited from his Haitian roots, became the foundation for Jahn Don's unique approach to hip-hop. His artistry knows no bounds, as evidenced by his international music performances that have taken him to Milan, Italy, Mexico, Argentina, and the iconic city of Los Angeles, CA. Embracing the global nature of his craft, Jahn has engaged in collaborations with undiscovered talents across the world, weaving a tapestry of diverse sounds and influences.

Jahn Don's ascent to the forefront of the music scene reached new heights with his album "Savage," earning him a coveted spot on the billboards of New York City in 2021. Following this triumph, he embarked on a tour that spanned Milan, Switzerland, Canada, Argentina, and Los Angeles, solidifying his presence on the international stage.

With an unwavering commitment to pushing boundaries, Jahn Don is poised to captivate audiences once again with his highly anticipated album, "LOFTS," scheduled for release on December 24th, 2023. His sonic footprint extends far beyond national borders, as his music graces the airwaves of international radio stations in Brazil, Canada, South Africa, Ghana, the United States, Haiti, and beyond.

Jahn Don's journey is not just a musical odyssey; it's a testament to the transformative power of art and the universal language it speaks. As he continues to carve his path, Jahn Don stands as a beacon of inspiration, proving that the resonance of his music knows no geographical confines.
. </p>
      </div>
    </div>
  </div>
);

export default Chef4;