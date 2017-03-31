const InitialState = {
	photos: []
}

export function photoReducer (state = InitialState, action){
	switch (action.type) {
		case 'ADD_ALBUM':
			return {albums: [...state.albums, action.album]}
		case 'ADD_PICTURE':
			return {pictures: Data.filter(picture=>{
				return picture.picture
			})}
		default:
		return state

	}


}
