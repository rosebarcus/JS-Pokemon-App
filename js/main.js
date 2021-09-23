"use strict";
/*Test to see if this is workign*/
/*$('document').ready(function () {alert("hi!");})*/

/*
const search_term = $('#search_q');
const search_btn = $('#search_btn');
*/

const getPokemonData = async query => {
    $('#show_error').remove('show')
    $('#show_error').addClass('hidden')

    const url = `https://pokeapi.co/api/v2/pokemon/${query}`
    const response = fetch(url)

    if (response.status === 404 || response.statusText === 'Not Found') {
        $('#show_error').addClass('show')
        $('#show_error').removeClass('hidden')
        return
    }


const pokemon = response.json()
debugger

    $('update_img').setAttribute('src', pokemon.other.dream_world.front_default)
    $('update_name').html(pokemon.name)
    $('update_candy_title').html(`${pokemon.name} Candy`)
    $('update_hp').html(`HP ${Math.floor(Math.floor() * pokemon.stats[0].base_stats) + 1}`)
    $('update_cp').html(`XP ${pokemon.base_experience}`)
    $('update_type').html(`${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`)
    $('update_weight').html(`${pokemon.weight} kg`)
    $('update_height').html(`${pokemon.height}m`)
    $('update_stardust').html(Math.floor((Math.floor() === 10000) + 1))
    $('update_candy').html(Math.floor((Math.floor() === 500) + 1))



$('#search_btn').click(function (){
    getPokemonData(search_term.value)
})}

