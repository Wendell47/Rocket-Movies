import { createGlobalStyle } from "styled-components";




({theme}) => theme.COLORS.BACKGROUND_800;
export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    
}

:root{
    font-size: ${({theme}) => theme.rootFont};
    font-size: 10px;
    --color-primary: ${({theme}) => theme.COLORS.red_main};
    --color-white:${({theme}) => theme.COLORS.WHITE} ;
    --color-gray-100: ${({theme}) => theme.COLORS.GRAY_100};
    --color-gray-300:  ${({theme}) => theme.COLORS.GRAY_300};
    --color-red:  ${({theme}) => theme.COLORS.RED};
    
    --bg-color-900: ${({theme}) => theme.COLORS.BACKGROUND_900};
    --bg-color-800: ${({theme}) => theme.COLORS.BACKGROUND_800};
    --bg-color-700: ${({theme}) => theme.COLORS.BACKGROUND_700} ;
    --bg-color-600: ${({theme}) => theme.COLORS.BACKGROUND_600} ;
    --bg-color-500: ${({theme}) => theme.COLORS.BACKGROUND_500} ;

  
}

html{
    scroll-behavior: smooth;
}
body{
  
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
   
}

body, input, button, textarea {
    font-family: 'Kanit', sans-serif;
    font-size:1.4rem;
}
a{
    text-decoration: none;
}
p{
    font-weight: 300;
}
h1{
    font-size:4.8rem;
    line-height: 1;
}
h3{
    font-size:2.4rem;
    font-weight: medium;
}
button, a{
    cursor:pointer;
    transition: filter 0.2s;
}

ul{
    list-style: none;
}

button:hover, a:hover{
    filter: brightness(0.9);

}

::-webkit-scrollbar {
  width: .5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:var(--color-primary);
  border-radius: 30rem;
}
`;