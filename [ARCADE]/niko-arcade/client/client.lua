ESX = nil

local xSound = exports['xsound']
local musicCheck = false

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

Citizen.CreateThread(function()
    modelHash = GetHashKey(Config.ArcadePed)
    RequestModel(modelHash)
    while not HasModelLoaded(modelHash) do
        Wait(50)
    end
    createArcadeNPC()
end)

local blips = {
    {title="Arcade Bar", colour=27, id=740, x = 740.27 y = -825.95 , z = 22.67} -- BLIP
    }      
    Citizen.CreateThread(function()
    
        for _, info in pairs(blips) do
        info.blip = AddBlipForCoord(info.x, info.y, info.z)
        SetBlipSprite(info.blip, info.id)
        SetBlipDisplay(info.blip, 4)
        SetBlipScale(info.blip, 0.8)
        SetBlipColour(info.blip, info.colour)
        SetBlipAsShortRange(info.blip, true)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString(info.title)
        EndTextCommandSetBlipName(info.blip)
    end
end)

function createArcadeNPC()
	created_ped = CreatePed(0, Config.ArcadePed , 740.27, -825.95, 22.67 -1, 0.7)

	FreezeEntityPosition(created_ped, true)
	SetEntityInvincible(created_ped, true)
	SetBlockingOfNonTemporaryEvents(created_ped, true)
end

function LoadAnimDict(animDict)
	while not HasAnimDictLoaded(animDict) do
		RequestAnimDict(animDict)
		Citizen.Wait(0)
	end
end	

function openArcadeStash()
    exports.ox_inventory:openInventory("stash", Config.ArcadeStash.id)
end

-- ARCADE MINIGAMES
function arcadeMiniGame(id)
        if id == 1 then
        ESX.TriggerServerCallback('niko-arcade_minigame1', function(cb)
            if cb.data then
                local playerPed = PlayerPedId()
                SetEntityCoords(playerPed, 744.43, -820.6, 22.67 -1)
                SetEntityHeading(playerPed, 94.39)
                FreezeEntityPosition(playerPed, true)
                local animDict = "anim_casino_a@amb@casino@games@arcadecabinet@maleright"
                LoadAnimDict(animDict)
                TaskPlayAnim(playerPed, animDict, "enter", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "enter") * 1000)
                TaskPlayAnim(playerPed, animDict, "idle", 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                Wait(1000)
                TaskPlayAnim(playerPed, animDict, "insert_coins", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "insert_coins") * 1000)
                local idleAnim = math.random(1, 2) == 1 and "playidle" or "playidle_v2"
                TaskPlayAnim(playerPed, animDict, idleAnim, 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                local success = exports['fc-minigames']:StartFlappy()
                if success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_win', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "win_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                elseif not success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_defeat', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "lose_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                    ESX.ShowNotification(_U('lost_machine_game'))
                end
            else
                ESX.ShowNotification(_U('not_have_items_to_play_machine'))
            end
        end)
    elseif id == 2 then
        ESX.TriggerServerCallback('niko-arcade_minigame1', function(cb)
            if cb.data then
                local playerPed = PlayerPedId()
                SetEntityCoords(playerPed, 742.83, -822.36, 22.7 -1)
                SetEntityHeading(playerPed, 357.88)
                FreezeEntityPosition(playerPed, true)
                local animDict = "anim_casino_a@amb@casino@games@arcadecabinet@maleright"
                LoadAnimDict(animDict)
                TaskPlayAnim(playerPed, animDict, "enter", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "enter") * 1000)
                TaskPlayAnim(playerPed, animDict, "idle", 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                Wait(1000)
                TaskPlayAnim(playerPed, animDict, "insert_coins", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "insert_coins") * 1000)
                local idleAnim = math.random(1, 2) == 1 and "playidle" or "playidle_v2"
                TaskPlayAnim(playerPed, animDict, idleAnim, 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                local success = exports['fc-minigames']:StartaimTrainer()
                if success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_win', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "win_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                elseif not success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_defeat', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "lose_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                    ESX.ShowNotification(_U('lost_machine_game'))
                end
            else
                ESX.ShowNotification(_U('not_have_items_to_play_machine'))
            end
        end)
    elseif id == 3 then
        ESX.TriggerServerCallback('niko-arcade_minigame1', function(cb)
            if cb.data then
                local playerPed = PlayerPedId()
                SetEntityCoords(playerPed, 742.0, -822.35, 22.7 -1)
                SetEntityHeading(playerPed, 357.88)
                FreezeEntityPosition(playerPed, true)
                local animDict = "anim_casino_a@amb@casino@games@arcadecabinet@maleright"
                LoadAnimDict(animDict)
                TaskPlayAnim(playerPed, animDict, "enter", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "enter") * 1000)
                TaskPlayAnim(playerPed, animDict, "idle", 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                Wait(1000)
                TaskPlayAnim(playerPed, animDict, "insert_coins", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "insert_coins") * 1000)
                local idleAnim = math.random(1, 2) == 1 and "playidle" or "playidle_v2"
                TaskPlayAnim(playerPed, animDict, idleAnim, 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                local success = exports['fc-minigames']:StartRainDrops()
                if success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_win', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "win_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                elseif not success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_defeat', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "lose_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                    ESX.ShowNotification(_U('lost_machine_game'))
                end
            else
                ESX.ShowNotification(_U('not_have_items_to_play_machine'))
            end
        end)
    elseif id == 4 then
        ESX.TriggerServerCallback('niko-arcade_minigame1', function(cb)
            if cb.data then
                local playerPed = PlayerPedId()
                SetEntityCoords(playerPed, 741.96, -819.05, 22.67 -1)
                SetEntityHeading(playerPed, 183.69)
                FreezeEntityPosition(playerPed, true)
                local animDict = "anim_casino_a@amb@casino@games@arcadecabinet@maleright"
                LoadAnimDict(animDict)
                TaskPlayAnim(playerPed, animDict, "enter", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "enter") * 1000)
                TaskPlayAnim(playerPed, animDict, "idle", 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                Wait(1000)
                TaskPlayAnim(playerPed, animDict, "insert_coins", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "insert_coins") * 1000)
                local idleAnim = math.random(1, 2) == 1 and "playidle" or "playidle_v2"
                TaskPlayAnim(playerPed, animDict, idleAnim, 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                local success = exports['fc-2048']:Start2048Hack()
                if success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_win', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "win_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                elseif not success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_defeat', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "lose_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                    ESX.ShowNotification(_U('lost_machine_game'))
                end
            else
                ESX.ShowNotification(_U('not_have_items_to_play_machine'))
            end
        end)
    elseif id == 5 then
        ESX.TriggerServerCallback('niko-arcade_minigame1', function(cb)
            if cb.data then
                local playerPed = PlayerPedId()
                SetEntityCoords(playerPed, 742.84, -819.03, 22.67 -1)
                SetEntityHeading(playerPed, 183.69)
                FreezeEntityPosition(playerPed, true)
                local animDict = "anim_casino_a@amb@casino@games@arcadecabinet@maleright"
                LoadAnimDict(animDict)
                TaskPlayAnim(playerPed, animDict, "enter", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "enter") * 1000)
                TaskPlayAnim(playerPed, animDict, "idle", 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                Wait(1000)
                TaskPlayAnim(playerPed, animDict, "insert_coins", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                Citizen.Wait(GetAnimDuration(animDict, "insert_coins") * 1000)
                local idleAnim = math.random(1, 2) == 1 and "playidle" or "playidle_v2"
                TaskPlayAnim(playerPed, animDict, idleAnim, 8.0, 8.0, -1, 1, 0.0, 0, 0, 0)
                local success = exports['memoryCardHack']:MemoryCardHack()
                if success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_win', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "win_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                elseif not success then
                    ESX.TriggerServerCallback('niko-arcade_minigame_defeat', function(cb)
                    end)
                    TaskPlayAnim(playerPed, animDict, "lose_big", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Wait(2500)
                    TaskPlayAnim(playerPed, animDict, "exit", 8.0, 8.0, -1, 0, 0.0, 0, 0, 0)
                    Citizen.Wait(GetAnimDuration(animDict, "exit") * 1000 - 1250)
                    ClearPedTasks(playerPed)
                    FreezeEntityPosition(playerPed, false)
                    ESX.ShowNotification(_U('lost_machine_game'))
                end
            else
                ESX.ShowNotification(_U('not_have_items_to_play_machine'))
            end
        end)
    end
end

-- TARGETS
Citizen.CreateThread(function()
exports[Config.Target]:AddBoxZone("niko_arcade_game_1", vector3(743.67, -820.68, 22.67), 1, 0.8, {
    name="niko_arcade_game_1",
    heading=90,
    --debugPoly=true,
    minZ=19.67,
    maxZ=23.67
	}, {
		options = {
			{
                action = function(id)
                    arcadeMiniGame(1)
                end,
                icon = "fa-solid fa-gamepad",
                label = _U('target_play_machine'),
			},
		},
		distance = 1.2
})

exports[Config.Target]:AddBoxZone("niko_arcade_game_2", vector3(742.86, -821.56, 22.68), 1, 0.8, {
    name="niko_arcade_game_2",
    heading=0,
    --debugPoly=true,
    minZ=19.68,
    maxZ=23.68
	}, {
		options = {
			{
                action = function(id)
                    arcadeMiniGame(2)
                end,
                icon = "fa-solid fa-gamepad",
                label = _U('target_play_machine'),
			},
		},
		distance = 1.2
})

exports[Config.Target]:AddBoxZone("niko_arcade_game_3", vector3(741.96, -821.49, 22.67), 1, 0.8, {
    name="niko_arcade_game_3",
    heading=0,
    --debugPoly=true,
    minZ=19.67,
    maxZ=23.67
	}, {
		options = {
			{
                action = function(id)
                    arcadeMiniGame(3)
                end,
                icon = "fa-solid fa-gamepad",
                label = _U('target_play_machine'),
			},
		},
		distance = 1.2
})

exports[Config.Target]:AddBoxZone("niko_arcade_game_4", vector3(742.03, -819.77, 22.69), 1, 0.8, {
    name="niko_arcade_game_4",
    heading=0,
    --debugPoly=true,
    minZ=19.69,
    maxZ=23.69
	}, {
		options = {
			{
                action = function(id)
                    arcadeMiniGame(4)
                end,
                icon = "fa-solid fa-gamepad",
                label = _U('target_play_machine'),
			},
		},
		distance = 1.2
})

exports[Config.Target]:AddBoxZone("niko_arcade_game_5", vector3(742.9, -819.81, 22.67), 1, 0.8, {
    name="niko_arcade_game_5",
    heading=0,
    --debugPoly=true,
    minZ=19.67,
    maxZ=23.67
	}, {
		options = {
			{
                action = function(id)
                    arcadeMiniGame(5)
                end,
                icon = "fa-solid fa-gamepad",
                label = _U('target_play_machine'),
			},
		},
		distance = 1.2
})

exports[Config.Target]:AddBoxZone("niko_arcade_stashe", vector3(735.82, -824.0, 22.67), 1, 2.4, {
    name="niko_arcade_stashe",
    heading=90,
    --debugPoly=true,
    minZ=19.47,
    maxZ=23.47
	}, {
		options = {
			{
                action = function()
                    openArcadeStash()
                end,
                icon = "fa-solid fa-box",
                label = _U('target_open_stash'),
                job = Config.ArcadeJob,
			},
		},
		distance = 1.5
})

exports[Config.Target]:AddCircleZone("niko_arcade_create", vector3(737.92, -822.06, 22.77), 0.8, {
    name="niko_arcade_create",
    useZ=true,
    --debugPoly=true
	}, {
		options = {
			{
                action = function(id)
                    arcadeCreateCraft(1)
                end,
                icon = "fa-solid fa-play",
                label = _U('target_craft_1'),
                job = Config.ArcadeJob,
			},
            {
                action = function(id)
                    arcadeCreateCraft(2)
                end,
                icon = "fa-solid fa-play",
                label = _U('target_craft_2'),
                job = Config.ArcadeJob,
			},
            {
                action = function(id)
                    arcadeCreateCraft(3)
                end,
                icon = "fa-solid fa-play",
                label = _U('target_craft_3'),
                job = Config.ArcadeJob,
			},
		},
		distance = 1.5
})

exports[Config.Target]:AddCircleZone("arcade_bossmenu", vector3(739.82, -813.19, 24.27), 0.75, {
    name="arcade_bossmenu",
    useZ=true,
    --debugPoly=true
	}, {
		options = {
			{
                action = function()
                    openBossMenuArcade()
                end,
                icon = "fa-solid fa-laptop-file",
                label = _U('target_bossmenu'),
                job = Config.ArcadeJob,
			},
		},
		distance = 1.5
})

exports[Config.Target]:AddBoxZone("arcade_dj", vector3(733.91, -818.16, 22.67), 1, 1.0, {
    name="arcade_dj",
    heading=0,
    --debugPoly=true,
    minZ=19.87,
    maxZ=23.87
	}, {
		options = {
			{
                action = function()
                    arcadeDjPanel()
                end,
                icon = "fa-solid fa-music",
                label = _U('target_change_music'),
                job = Config.ArcadeJob,
			},
            {
                action = function()
                    arcadeDjMusicOff()
                end,
                icon = "fa-solid fa-music",
                label = _U('target_off_music'),
                job = Config.ArcadeJob,
			},
		},
		distance = 1.5
})
end)
-- ARCADE BOSS ACTION

function openBossMenuArcade()
    if(ESX.GetPlayerData().job.grade_name == 'boss') then 
        TriggerEvent('fc-bossmenu:open', {["WYPLAC"] = true,["WPLAC"] = true,["ZARZADZANIEP"] = true})
    else
        ESX.ShowNotification(_U('not_have_authorized'))
    end
end

-- ARCADE CRAFTING
function arcadeCreateCraft(id)
        if id == 1 then
            ESX.TriggerServerCallback('niko-arcade_crafting_check1', function(cb)
                if cb.data then
                    local success = exports['fc-minigames']:StartSimonSays()
                    if success then
                        ESX.TriggerServerCallback('niko-arcade_crafting_win1', function(cb)
                        end)
                    elseif not success then
                        ESX.ShowNotification(_U('error_create_shot'))
                    end
                else
                    ESX.ShowNotification(_U('not_have_items_to_create_drinks'))
                end
            end)
        elseif id == 2 then
            ESX.TriggerServerCallback('niko-arcade_crafting_check2', function(cb)
                if cb.data then
                    local success = exports['fc-minigames']:StartSimonSays()
                    if success then
                        ESX.TriggerServerCallback('niko-arcade_crafting_win2', function(cb)
                        end)
                    elseif not success then
                        ESX.ShowNotification(_U('error_create_cola'))
                    end
                else
                    ESX.ShowNotification(_U('not_have_items_to_create_drinks'))
                end
            end)
        elseif id == 3 then
            ESX.TriggerServerCallback('niko-arcade_crafting_check3', function(cb)
                if cb.data then
                    local success = exports['fc-minigames']:StartSimonSays()
                    if success then
                        ESX.TriggerServerCallback('niko-arcade_crafting_win3', function(cb)
                        end)
                    elseif not success then
                        ESX.ShowNotification(_U('error_create_mixture'))
                    end
                else
                    ESX.ShowNotification(_U('not_have_items_to_create_drinks'))
                end
            end)
    end
end

-- DRINKS
RegisterNetEvent('niko-arcade:arcadeShot', function()
    ESX.TriggerServerCallback('niko-arcade_drinks_shot', function(cb)
    end)
	if(xSound:soundExists("enderpearl")) then
		xSound:Destroy("enderpearl")
	end
	AnimpostfxPlay("DrugsTrevorClownsFightOut", 500, false)
	TriggerEvent('InteractSound_CL:PlayOnOne', 'enderpearl', 0.8)
end)

-- DJ musicCheck

function arcadeDjPanel()
    local input = lib.inputDialog('Arcade DJ', {_U('dj_text_1'), _U('dj_text_2')})
    local url = input[1]
    local volume = input[2]

    if url == nil or volume == nil then
        ESX.ShowNotification(_U('incorrectly_filled'))
    else
        TriggerServerEvent('niko-arcade_dj_ss', url, volume)
        ESX.ShowNotification(_U('music_on'))
    end
end

RegisterNetEvent('niko-arcade_dj', function(url, volume)
    local xSound = exports["xsound"] 
    if(not xSound:soundExists("arcade_song")) then
        xSound:PlayUrlPos("arcade_song", url, volume, vector3(741.93, -820.6, 22.7), false)
        xSound:Distance("arcade_song", 25.0)
        musicCheck = true
    else
        xSound:Destroy("arcade_song")
        xSound:PlayUrlPos("arcade_song", url, volume, vector3(741.93, -820.6, 22.7), false)
        xSound:Distance("arcade_song", 25.0)
        musicCheck = true
    end
end)

function arcadeDjMusicOff()
    if musicCheck == true then
        TriggerServerEvent('niko-arcade_dj_offmusic')
        ESX.ShowNotification(_U('music_off'))
    else
        ESX.ShowNotification(_U('none_music'))
    end
end

RegisterNetEvent('niko-arcade_dj_offmusic', function()
    local xSound = exports["xsound"] 
    xSound:Destroy("arcade_song")
    musicCheck = false
end)