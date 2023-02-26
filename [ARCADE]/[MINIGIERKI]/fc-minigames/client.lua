ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(1000)
    end
end)

local MinigameActive = false
local MinigameFinished = false
local SuccessTrigger = nil
local FailTrigger = nil
local Success = false

function StartFlappy(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartFlappy', StartFlappy)

function StartSimonSays(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz2'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartSimonSays', StartSimonSays)

function StartRainDrops(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz3'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartRainDrops', StartRainDrops)

function StartaimTrainer(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz4'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartaimTrainer', StartaimTrainer)

function StartcodeMemory(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz5'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartcodeMemory', StartcodeMemory)

function StartMemoryCard(cb)
	if MinigameActive then return end

		SetNuiFocus(true, true)
		SendNUIMessage({type = 'otworz6'})
		MinigameActive = true
		MinigameFinished = false

		while MinigameActive do
			Citizen.Wait(500)
		end

		if cb then
			cb(Success)
		end

		return Success
	end

exports('StartMemoryCard', StartMemoryCard)

RegisterCommand("test01", function(cb)
	local success = exports['fc-minigames']:StartcodeMemory()
if success then
    ESX.ShowNotification('Udane')
elseif not success then
ESX.ShowNotification('Nie Udane')
end
end)

RegisterCommand("test02", function(cb)
	local success = exports['fc-minigames']:StartaimTrainer()
if success then
    ESX.ShowNotification('Udane')
elseif not success then
ESX.ShowNotification('Nie Udane')
end
end)



 RegisterCommand("test03", function(cb)
 	local success = exports['fc-minigames']:StartRainDrops()
 if success then
     ESX.ShowNotification('Udane')
 elseif not success then
 ESX.ShowNotification('Nie Udane')
 end
 end)



RegisterCommand("test04", function(cb)
	local success = exports['fc-minigames']:StartSimonSays()
if success then
    ESX.ShowNotification('Udane')
elseif not success then
ESX.ShowNotification('Nie Udane')
end
end)

RegisterCommand("test05", function(cb)
	local success = exports['fc-minigames']:StartFlappy()
if success then
    ESX.ShowNotification('Udane')
elseif not success then
ESX.ShowNotification('Nie Udane')
end
end)



RegisterNUICallback('udane', function(data, cb)
    SetNuiFocus(false, false)
    Success = true
    MinigameFinished = false
    MinigameActive = false
    cb('ok')
end)

RegisterNUICallback('nieudane', function(data, cb)
    SetNuiFocus(false, false)
    MinigameActive = false
    Success = false
    cb('ok')
end)

exports('StartFlappy', StartFlappy)

function StartMinigame(game)
	if game == "simonSays" then
		local success = exports['fc-minigames']:StartSimonSays()
		if success then
    return true
		elseif not success then
	return false
	end
	end
	if game == "aimTrainer" then
		local success = exports['fc-minigames']:StartaimTrainer()
		if success then
    return true
		elseif not success then
	return false
	end
	end
	if game == "flappyBird" then
		local success = exports['fc-minigames']:StartFlappy()
		if success then
    return true
		elseif not success then
	return false
	end
	end
	if game == "rainDrops" then
		local success = exports['fc-minigames']:StartRainDrops()
		if success then
    return true
		elseif not success then
	return false
	end
	end
	if game == "memoryCard" then
		local success = exports['fc-minigames']:StartMemoryCard()
		if success then
    return true
		elseif not success then
	return false
	end
	end
end




exports("StartMinigame", function(game)
    return StartMinigame(game);
end)
