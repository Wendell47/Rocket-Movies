import { H2 } from "./styles";


export function Title({title, ...rest}){
return (
<>
    <H2
    {...rest}
    >
        {title}
    </H2>
</>

)
}