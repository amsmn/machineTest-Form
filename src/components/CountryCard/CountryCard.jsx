import './CountryCard.css';
import PropTypes from 'prop-types';

const CountryCard = ({ name, region, flag }) => {
  return (
    <div className="country-card">
      <div className="image">
        <img src={flag} alt={`Flag of ${name}`} />
      </div>
      <div className="typography">{name}</div>
      <div className="typography-TAGUI">{region}</div>
    </div>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountryCard;
