import styles from './Filter.module.css'
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
    return (
        <>
            <p className={styles.filterTitle}>Find contacts by name</p>
            <input className={styles.filterInput}
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter}
                onChange={onFilterChange}
            />
        </>
    )

}

Filter.propTypes ={
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  }