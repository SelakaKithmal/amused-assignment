import * as React from 'react';
import { DEFAULT, FAVOURITES, SEARCH_RESULT } from '../../constants/item-card-types';
import useDeleteFavouriteItem from '../../hooks/useDeleteFavouriteItem';
import useUpdateFavouriteItemList from '../../hooks/useUpdateFavouriteItemList';

export default function ItemCard(props) {
    const { itemid, cardname, cardimage, cardcategory, type } = props;
    const [, setFavouriteId] = useUpdateFavouriteItemList()
    const [setDeleteFavouriteId] = useDeleteFavouriteItem()

    return (
        <>
            <div className="card" style={{ maxWidth: "18rem", marginBottom: "10px" }}>
                <img src={cardimage} className="card-img-top" alt="shows a card" />
                <div className="card-body">
                    <h5 className="card-title">{cardname}</h5>
                    {(type === DEFAULT) && <p className="card-text">{cardcategory}</p>}
                    {(type === SEARCH_RESULT) &&
                        <button type="button" className="btn btn-outline-success btn-sm" onClick={() => setFavouriteId(itemid)}><i className="bi bi-heart-fill" data-testid="favourite-icon" /> Add To Favourites</button>
                    }
                    {type === FAVOURITES &&
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => setDeleteFavouriteId(itemid)}><i className="bi bi-trash" data-testid="favourite-icon" /> Remove From Favourites</button>
                    }
                </div>
            </div></>
    );
}