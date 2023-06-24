import { Container,BtnPrimary, BtnSecondary} from "./styles";

// eslint-disable-next-line react/prop-types
export default function Button({btnSecondary=false,title, loading = false,  icon: Icon,...rest}){
    return(
        <Container>
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
        </Container>
    )
}