import { Container, MoviesTitle, MoviesContent,Content, TagsContent, GridTitle} from "./styles"
import Header from "../../components/Header"
import MovieCard  from "../../components/MovieCard"
import Button from "../../components/Button"
import {FiPlus} from 'react-icons/fi'
import Tag from "../../components/Tags"
import Ranked from "../../components/ranked"
import { useNavigate } from "react-router-dom"

  
export function Home() {
    
    function handleMoviePreview(){
        navigate(`/MoviePreview`)
    }
    
    const navigate = useNavigate()
    return(
        
        <Container>
            
                <Header/>
               
                    
                    <GridTitle>
                <MoviesTitle>

                    <h3>Meus Filmes</h3>

                    <Button
                    title="Adicionar Filme"
                    link="/CreateMovie"
                    icon={FiPlus}
                    
                    />

                    </MoviesTitle>
                </GridTitle>
                 

            <div className="content">
                <Content>
            
            <MoviesContent>
                <MovieCard 
                title="Interestellar"
                onclick={handleMoviePreview}
                >
                    <Ranked/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est illum impedit vitae veniam dolores molestias nobis, ab repellendus dolorem aut accusantium. Repellat, reiciendis iure? Nihil consectetur earum facere quasi.</p>
                 
                <TagsContent>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
                </TagsContent>
                    
                </MovieCard>
                <MovieCard title="Interestellar">
                <Ranked/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est illum impedit vitae veniam dolores molestias nobis, ab repellendus dolorem aut accusantium. Repellat, reiciendis iure? Nihil consectetur earum facere quasi.</p>

                <TagsContent>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
                </TagsContent>


                </MovieCard>
                <MovieCard title="Interestellar">
                <Ranked/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est illum impedit vitae veniam dolores molestias nobis, ab repellendus dolorem aut accusantium. Repellat, reiciendis iure? Nihil consectetur earum facere quasi.</p>

                <TagsContent>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
                </TagsContent>


                </MovieCard>
                <MovieCard title="Interestellar">
                <Ranked/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est illum impedit vitae veniam dolores molestias nobis, ab repellendus dolorem aut accusantium. Repellat, reiciendis iure? Nihil consectetur earum facere quasi.</p>

                <TagsContent>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família" TextArea = "true"/>
                </TagsContent>


                </MovieCard>
            </MoviesContent>
            </Content>
            </div>
        </Container>
    )
}