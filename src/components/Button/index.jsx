import {BtnPrimary, BtnSecondary} from "./styles";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Button({btnSecondary=false,title, loading = false, link,  icon: Icon,...rest}){
    return(
        <>
        <Link to={link}>
          {!btnSecondary ? <BtnPrimary
          type="button"
          disabled={loading}
          {...rest}
          >
          {Icon && <Icon size={20}/>} {loading ? 'Carregando' : title}
          </BtnPrimary>
        :
        <BtnSecondary
          type="button"
          disabled={loading}
          {...rest}
          >
          {Icon && <Icon size={20}/>} {loading ? 'Carregando' : title}
          </BtnSecondary>  
        }
        </Link>
        </>
    )
}