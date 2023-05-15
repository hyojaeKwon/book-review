// mainPage
import React from 'react';

import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue
} from 'recoil';
import SerechMain from 'search/search'

const MainPage = () => {
	return (
		<RecoilRoot>
			<SerechMain/>		
		</RecoilRoot>
	)
}

export default MainPage;