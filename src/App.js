import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldCopyOnOutsideDrop: false,
      treeData1: [
        {
          title: "Non-active",
          expanded: true,
          children: [
            {
              title: "Fitri",
              expanded: true,
              children: [{ title: "Lily" }],
            },
          ],
        },
      ],
      treeData2: [
        {
          title: "Active",
          expanded: true,
          children: [
            {
              title: "Kitty",
              expanded: true,
              children: [{ title: "Bento" }],
            },
          ],
        },
      ],
    };
  }

  render() {
    const maxDepth = 3;
    const { shouldCopyOnOutsideDrop, treeData1, treeData2 } = this.state;
    const externalNodeType = "yourNodeType";
    return (
      <div>
        <h1 className="title">TREE TO TREE - REACT SORTABLE TREE</h1>
        <div style={{ height: 400 }} className="tree-body">
          <SortableTree
            treeData={treeData1}
            maxDepth={maxDepth}
            theme={FileExplorerTheme}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
            canDrag={({ node }) => {
              if (node === treeData1[0] || node === treeData1[1]) {
                return false;
              } else {
                return true;
              }
            }}
            canDrop={({ nextParent }) => {
              if (nextParent === null) {
                return false;
              }
              return true;
            }}
            onChange={(treeData1) => {
              this.setState({ treeData1 });
            }}
          />

          <SortableTree
            treeData={treeData2}
            maxDepth={maxDepth}
            dndType={externalNodeType}
            theme={FileExplorerTheme}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
            canDrag={({ node }) => {
              if (node === treeData2[0] || node === treeData2[1]) {
                return false;
              } else {
                return true;
              }
            }}
            canDrop={({ nextParent }) => {
              if (nextParent === null) {
                return false;
              }
              return true;
            }}
            onChange={(treeData2) => {
              this.setState({ treeData2 });
            }}
          />
        </div>
        <p className="info-text">
          Coded by :
          <a
            href="https://github.com/fitrianinasir"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5px" }}
          >
            https://github.com/fitrianinasir
          </a>
          <br/>
          Using package from :
          <a
            href="https://www.npmjs.com/package/react-sortable-tree"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5px" }}
          >
            https://www.npmjs.com/package/react-sortable-tree
          </a>
        </p>
      </div>
    );
  }
}
