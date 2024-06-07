import { Loader } from "../../components/loader"
import React from "react";

export const Skeleton: React.FC = (): JSX.Element => {
    return(
        <section className="Skeleton">
            <div className="Skeleton__header">
                <Loader />
            </div>

            <div className="Skeleton__body">
                <div>
                    <Loader />
                </div>
                <div>
                    <Loader />
                </div>
                <div>
                    <Loader />
                </div>
            </div>
        </section>
    )
}