import { Theme } from "./action";

export const ThemeReducer = (store={currentTheme:false}, action) => {
    switch(action.type){
        case Theme:{
            return {
                currentTheme: action.payload
            }
        }
        default:{
            return store
        }
    }
}