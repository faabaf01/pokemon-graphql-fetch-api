import { Button } from '@chakra-ui/react'
import { Link } from '@tanstack/react-location'
import React from 'react'

interface Props {}

function Home(props: Props) {
    const {} = props
    const testData = [
        {name: "bulbasaur"},
        {name: "pikachu"},
        {name: "charmander"},
    ]
    return (
        <div>
            home
            {testData.map((p,i) => 
            <Link key={i} to={`/details?name=${p.name}`}>
                <Button>
                {p.name}
                </Button>
            </Link>
            )}
        </div>
    )
}

export default Home
