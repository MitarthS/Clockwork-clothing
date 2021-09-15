import React, { Component } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import SHOP_DATA from './shopData';

export default class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherProps}) => (
                        <PreviewCollection key={id}
                        {...otherProps} />
                    ))
                }
            </div>
        )
    }
}
