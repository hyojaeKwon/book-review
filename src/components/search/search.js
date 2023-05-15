import {useRecoilState,atom,selector,useRecoilValue} from 'recoil'

export const textState = atom({
	key: 'textState',
	default: '',
})
const searchvalue = selector({
	key: 'textValue',
	get: ({get}) => {
		const text = get(textState);
		
		return text;
	}
});



const SearchMain = () => {

	return <div>
		<TextInput />
		<SearchResult />
	</div>
	
}


const SearchResult = () => {
	const searchResultValue = useRecoilValue(searchvalue);
	
	return (<div>{searchResultValue}</div>)
}



const TextInput = () =>{
	const [text, setText] = useRecoilState(textState);
	
	const onChange = (e) => {
		setText(e.target.value);
	}
	
	return (
		<div>
			<input type='text' value={text} onChange={onChange} />
			<br/>
		</div>
	)
}



export default SearchMain;
