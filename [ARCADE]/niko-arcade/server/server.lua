ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

local GetCurrentResourceName = GetCurrentResourceName()
local ox_inventory = exports.ox_inventory

-- ARCADE CRAFTING
ESX.RegisterServerCallback('niko-arcade_crafting_check1', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'arcade_rum', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_cukier', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_limonka', nil, true)
    local wystarczy = false
  
    if item >= 1 and item2 >= 1 and item3 >= 1 then
        wystarczy = true
    end
    
    cb({
        data = wystarczy,
    })
end)

ESX.RegisterServerCallback('niko-arcade_crafting_check2', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'water', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_barwnik', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_cukier', nil, true)
    local wystarczy = false
  
    if item >= 1 and item2 >= 1 and item3 >= 1 then
        wystarczy = true
    end
    
    cb({    
        data = wystarczy,
    })
end)

ESX.RegisterServerCallback('niko-arcade_crafting_check3', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'water', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_barwnik2', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_kwas', nil, true)
    local wystarczy = false
  
    if item >= 1 and item2 >= 1 and item3 >= 1 then 
        wystarczy = true
    end
    
    cb({
        data = wystarczy,
    })
end)

ESX.RegisterServerCallback('niko-arcade_crafting_win1', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'arcade_rum', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_cukier', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_limonka', nil, true)

    if item >= 1 and item2 >= 1 and item3 >= 1 then
        xPlayer.addInventoryItem('arcade_shot', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_rum', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_cukier', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_limonka', 1)
    else
        TriggerClientEvent('esx:showNotification', source, _U('not_have_items_to_create_drinks'))
    end
end)

ESX.RegisterServerCallback('niko-arcade_crafting_win2', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'water', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_barwnik', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_cukier', nil, true)

    if item >= 1 and item2 >= 1 and item3 >= 1 then
        xPlayer.addInventoryItem('arcade_cola', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'water', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_barwnik', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_cukier', 1)
    else
        TriggerClientEvent('esx:showNotification', source, _U('not_have_items_to_create_drinks'))
    end
end)

ESX.RegisterServerCallback('niko-arcade_crafting_win3', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = exports.ox_inventory:GetItem('arcade_stash', 'water', nil, true)
    local item2 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_barwnik2', nil, true)
    local item3 = exports.ox_inventory:GetItem('arcade_stash', 'arcade_kwas', nil, true)

    if item >= 1 and item2 >= 1 and item3 >= 1 then
        xPlayer.addInventoryItem('arcade_blue_potion', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'water', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_barwnik2', 1)
        exports.ox_inventory:RemoveItem('arcade_stash', 'arcade_kwas', 1)
    else
        TriggerClientEvent('esx:showNotification', source, _U('not_have_items_to_create_drinks'))
    end
end)

-- MINI GAMES
ESX.RegisterServerCallback('niko-arcade_minigame1', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source
    local item = xPlayer.getInventoryItem(Config.ArcadeMachineItem)
    local wystarczy = false
  
    if item.count >= 1 then   
        wystarczy = true
        xPlayer.removeInventoryItem(Config.ArcadeMachineItem, 1)
end
    
    cb({
        data = wystarczy,
    })
end)

ESX.RegisterServerCallback('niko-arcade_minigame_win', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source

    xPlayer.addInventoryItem(Config.ArcadeMachineItem, 2)
end)

ESX.RegisterServerCallback('niko-arcade_minigame_defeat', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source

    TriggerEvent('esx_addonaccount:getSharedAccount', 'society_arcade', function(account)
        if account then
                account.addMoney(500)
                print('dodano kasę do konta Arcade')
            else
                print('brak konta')
        end
    end)
end)

ESX.RegisterServerCallback('niko-arcade_drinks_shot', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local _source = source

    xPlayer.removeInventoryItem('arcade_shot', 1)
end)

-- STASH

local stashes = {
	{
		id = Config.ArcadeStash.id,
		label = _U('stash_text'),
		slots = Config.ArcadeStash.slots,
		weight = Config.ArcadeStash.weight,
		owner = false,
	},
}

AddEventHandler('onServerResourceStart', function(resourceName)
	if resourceName == 'ox_inventory' or resourceName == GetCurrentResourceName then
		for i=1, #stashes do
			local stash = stashes[i]
			ox_inventory:RegisterStash(stash.id, stash.label, stash.slots, stash.weight, stash.owner, stash.jobs)
		end
	end
end)

RegisterServerEvent('niko-arcade_dj_ss')
AddEventHandler('niko-arcade_dj_ss', function(url, volume)
    TriggerClientEvent('niko-arcade_dj',- 1, url, volume)
end)

RegisterServerEvent('niko-arcade_dj_offmusic')
AddEventHandler('niko-arcade_dj_offmusic', function()
    TriggerClientEvent('niko-arcade_dj_offmusic',- 1)
end)