import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokemon_aux = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
                const data = await pokemon_aux.json();
                setPokemon(data);
                console.log(data);
            } catch (error) {
                console.error('Erro ao buscar pokemon:', error);
            }
        };

        fetchPokemon();
    }, []);

    return (
        <View style={styles.container}>
            {pokemon ? (
                <>
                    <Text style={styles.titulo}>{pokemon.name.toUpperCase()}</Text>
                    <Text>ID: {pokemon.id}</Text>
                    <Text>Altura: {pokemon.height}</Text>
                    <Text>Peso: {pokemon.weight}</Text>
                    <Text>Tipo(s):</Text>
                    {pokemon.types.map((tipo, index) => (
                        <Text key={index}>- {tipo.type.name}</Text>
                    ))}
                    <Text>Imagem:</Text>
                    <Image
                        source={{ uri: pokemon.sprites.front_default }}
                        style={styles.imagem}
                    />
                </>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    imagem: {
        width: 100,
        height: 100,
        marginTop: 8,
    },
});


export default Pokemon;