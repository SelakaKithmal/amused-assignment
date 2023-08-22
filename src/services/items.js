import axios from "axios";

/**
 * The service is used to retrieve a random Item
 */
export const getRandomItem = async () => {
    return await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
};

/**
 * The service is used to retrieve a random Item
 */
export const getItemByName = async (name) => {
    return await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name);
};

/**
 * The service is used to Item by id
 */
export const getItemById = async (id) => {
    return await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);
};