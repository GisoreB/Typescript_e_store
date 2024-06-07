import { useParams } from "react-router-dom"
import { ButtonCTA } from "../../components/buttonCTA"
import { Rating } from "../../components/rating"
import { ItemInterface, PageProps } from "../../globalTypes"
import React from "react";

export const Product: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
    const { title } = useParams()
    const { items } = state
    const item: ItemInterface = items.find(index => index.title.trim() === title?.trim()) as ItemInterface

    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [searching])

    return(
        <section className="Detail">
            <article className="Detail__thumbnail">
                <img src={item.image} alt="" />
            </article>

            <article className="Detail__info">
                <div className="Detail__info--header">
                    <h2>{item.title}</h2>
                    <ButtonCTA
                        ItemId={item.id}
                        dispatch={dispatch}
                        added={item.added}
                    />
                </div>

                <div className="Detail__info--meta">
                    <span className="Detail__price">${item.price}</span>
                    <Rating content={item.rating.rate} />
                </div>

                <p className="Detail__info--description">
                    {item.description}
                </p>
            </article>
        </section>
    )
}