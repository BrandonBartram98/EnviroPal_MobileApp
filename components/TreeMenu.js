import React from 'react'
import { Text, View } from 'react-native'

import TreeView from 'react-native-final-tree-view'

const treeData = [
    {
        id: 'Transport',
        name: 'Transport Help',
        children: [
            {
                id: 'info1',
                name: 'Why Public Transport?',
                children: [
                    {
                        id: 'furtherinfo',
                        name: 'Public transport takes up less space'
                    }
                ]
            }
        ]
    },
    {
        id: 'Diet',
        name: 'Diet Help',
        children: [
            {
                id: 'diet1',
                name: 'Eat More Plants!'
            }
        ]
    }
]

function getIndicator(isExpanded, hasChildrenNodes) {
    if (!hasChildrenNodes) {
        return '-'
    } else if (isExpanded) {
        return '-'
    } else {
        return '+'
    }
}

function TreeMenu() {
    return (
        <TreeView 
        data={treeData}
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
            return (
                <View>
                    <Text 
                    style={{
                        textAlign: 'center', fontSize: 15, fontFamily: 'Arial'
                    }}
                    >
                        {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                    </Text>
                </View>
            )
        }}
        />
    )
}

export default TreeMenu