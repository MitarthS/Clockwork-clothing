import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shopSelectors'
import PreviewCollection from '../preview-collection/PreviewCollection'
import './collectionsOverview.scss'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherProps}) => (
                    <PreviewCollection key={id}
                    {...otherProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
