import './HomeCollection.css';

const HomeCollection = () => {
  return (
    <div className='HomeCollectionMainDivHomePage'>
      <div className='HomeCollectionInnerdiv'>
        <div className='HomeCollectionText'>
          <p>Elite Home Collection Services</p>
        </div>
        <div className='HomeCollectionLists'>
          <ul>
            <li>Trained & experienced professionals</li>
            <li>A/C vehicle for sample integrity preservation</li>
            <li>Temperature controlled sample transport devices</li>
            <li>Safe, sterile, single use blood collection kit</li>
          </ul>
        </div>
        <div className='HomeCollectionButton'>
        <a href="/HomeCollectionServices">Book Now </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCollection;
