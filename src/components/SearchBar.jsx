import '../css/SearchBar.css'

function SearchBar() {

  return (
    <div className={'search-bar'}>
      <label htmlFor={'search-bar'}>
        <input type={'search'} name={'search-bar'} placeholder={'Zoeken naar...'} />
        <span>🔍</span>
      </label>
    </div>
  )
}

export default SearchBar;