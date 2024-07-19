import React from "react";

interface SearchProps {
    searchVisible: boolean;
    // onHide: () => void;
    
}
const Search: React.FC<SearchProps> = ({searchVisible}: SearchProps) => {

    return <>
    <h2 className={`${!searchVisible && 'hidden'} max-w-sm mx-auto text-center my-10`} >Search a recipe button clicked</h2>
    </>
}

export default Search;