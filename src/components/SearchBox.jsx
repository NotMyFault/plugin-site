import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from '@emotion/styled';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import styles from '../styles/main.module.css';


// handleOnChange = (event) => {
//     event.preventDefault();
//     this.props.setQuery(event.currentTarget.value);
// }

// // For some reason the input.onFocus was overriding a.onClick so use the
// // same function and detect the caller
// handleToggleShowFilter = (event) => {
//     event.preventDefault();
//     const forceOpen = event.currentTarget.name === 'query';
//     this.props.toggleShowFilter({forceOpen: forceOpen});
// }

const SearchBoxContainer = styled.fieldset`

`;

function SearchBox({handleOnSubmit, showFilter, setShowFilter}) {
    const [query, setQuery] = React.useState('');

    const handleToggleShowFilter = (e) => {
        e && e.preventDefault();
        setShowFilter(!showFilter);
    };
    
    return (
        <SearchBoxContainer className={classNames('form-inline SearchBox')}>
            <div className={classNames('form-group')} style={{width: '100%'}}>
                <InputGroup style={{width: '100%'}}>
                    <InputGroupAddon addonType="prepend">
                        <Button color="primary" onClick={handleToggleShowFilter}>
                            {'Browse '}
                            <span>{showFilter ? '▼' : '◄' }</span>
                        </Button>
                    </InputGroupAddon>
                    <Input 
                        name="query"
                        value={query}
                        autoFocus
                        onChange={setQuery}
                        placeholder="Find plugins..."
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={handleOnSubmit}>
                            <i className={classNames('icon-search')} />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </SearchBoxContainer>
    );
}

SearchBox.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    setShowFilter: PropTypes.func.isRequired,
    showFilter: PropTypes.bool.isRequired
};

SearchBox.defaultProps = {
    handleOnSubmit: () => {}
};

export default SearchBox;
