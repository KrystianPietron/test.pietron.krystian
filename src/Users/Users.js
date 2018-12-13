import React from 'react'
import Button from 'material-ui/RaisedButton'
import { connect } from 'react-redux'

import { loadUsersData } from '../state/users'

const Users = props => (
    <div>
        <Button
            label='Download Users'
            onClick={props._loadUsersData}
        />
    </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    _loadUsersData: () => dispatch(loadUsersData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)