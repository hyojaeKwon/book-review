import {selector,useRecoilValue} from 'recoil'
import textState from './search'

const searchvalue = selector({
	key: 'textValue',
	get: ({get}) => {
		const text = get(textState);
		
		return text;
	}
});

const SearchResult = () => {
	const searchResultValue = useRecoilValue(searchvalue);
	
	return (<div>{searchResultValue}</div>)
}

export default SearchResult