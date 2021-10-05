import { Wrapper } from '../wrapper/index'
import { ProgressBar } from '../progressBar/Index'
import { Tiles } from '../tiles/Tiles'

export const Home = () => {
    return <Wrapper>
        <Tiles />
        <ProgressBar progressLevel={2} />
    </Wrapper>
}