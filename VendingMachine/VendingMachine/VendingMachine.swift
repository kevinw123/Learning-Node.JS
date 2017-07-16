//
//  VendingMachine.swift
//  VendingMachine
//
//  Created by Kevin Wong on 2017-07-02.
//  Copyright © 2017 Treehouse Island, Inc. All rights reserved.
//

import Foundation

enum VendingSelection {
    case soda
    case dietSoda
    case #imageLiteral(resourceName: "chips")
    case #imageLiteral(resourceName: "cookie")
    case #imageLiteral(resourceName: "sandwich")
    #imageLiteral(resourceName: "wrap")
    #imageLiteral(resourceName: "candyBar")
    #imageLiteral(resourceName: "popTart")
    #imageLiteral(resourceName: "water")
    #imageLiteral(resourceName: "fruitJuice")
    #imageLiteral(resourceName: "sportsDrink")
    gum
}

protocol VendingItem{
    var price: Double{get}
    var quantity: Int { get set }
}

protocol VendingMachine {
    var selection: [VendingSelection]{ get }
    var inventory: [VendingSelection: VendingItem]
    var amountDeposited: Double { get set }
    
    init(inventory: [VendingSelection: VendingItem])
    
    func vend(_ selection: VendingSelection, quantity: Int)
    func vend(_ quantity: Int, of selection: VendingSelection)
    func vend(_ quantity: Int, _ selection: VendingSelection)
    
    
    func vend(selection: VendingSelection, quantity: Int) throws
}
