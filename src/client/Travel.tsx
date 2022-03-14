import BasePage from "./shared/BasePage"
import React, { useEffect, useState} from 'react';
import { Card, Input } from 'semantic-ui-react'
import { RecipesJson, Recipe } from './Recipes.interface'

export default function Travel() {
    const [APIData, setAPIData] = useState<Recipe[]>([])
    const [filteredResults, setFilteredResults] = useState<Recipe[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        let recipes: RecipesJson = require('./test/recipe-test.json')
        setAPIData(recipes.recipes)
    }, [])

    const searchItems = (searchValue: string) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((recipe: Recipe) => {
                return Object.values(recipe).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <BasePage>
            <div style={{ padding: 20 }}>
                <Input icon='search'
                    placeholder='Search...'
                    onChange={(e) => searchItems(e.target.value)}
                />
                <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                    {searchInput.length >= 1 ? (
                        filteredResults.map((item) => {
                            return (
                                <Card key={item.name}>
                                    <Card.Content>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Description>
                                            {item.description}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    ) : (
                        APIData.map((item) => {
                            return (
                                <Card key={item.name}>
                                    <Card.Content>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Description>
                                            {item.description}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )
                        })
                    )}
                </Card.Group>
            </div>
        </BasePage>
    );
}