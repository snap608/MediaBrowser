define([],function(){"use strict";function getNowPlayingNames(nowPlayingItem,includeNonNameInfo){var topItem=nowPlayingItem,bottomItem=null,topText=nowPlayingItem.Name;nowPlayingItem.AlbumId&&"Audio"===nowPlayingItem.MediaType&&(topItem={Id:nowPlayingItem.AlbumId,Name:nowPlayingItem.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===nowPlayingItem.MediaType&&(null!=nowPlayingItem.IndexNumber&&(topText=nowPlayingItem.IndexNumber+" - "+topText),null!=nowPlayingItem.ParentIndexNumber&&(topText=nowPlayingItem.ParentIndexNumber+"."+topText));var bottomText="";nowPlayingItem.Artists&&nowPlayingItem.Artists.length?nowPlayingItem.ArtistItems&&nowPlayingItem.ArtistItems.length?(bottomItem={Id:nowPlayingItem.ArtistItems[0].Id,Name:nowPlayingItem.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},bottomText=bottomItem.Name):bottomText=nowPlayingItem.Artists[0]:nowPlayingItem.SeriesName||nowPlayingItem.Album?(bottomText=topText,topText=nowPlayingItem.SeriesName||nowPlayingItem.Album,bottomItem=topItem,topItem=nowPlayingItem.SeriesId?{Id:nowPlayingItem.SeriesId,Name:nowPlayingItem.SeriesName,Type:"Series",IsFolder:!0}:null):nowPlayingItem.ProductionYear&&includeNonNameInfo!==!1&&(bottomText=nowPlayingItem.ProductionYear);var list=[];return list.push({text:topText,item:topItem}),bottomText&&list.push({text:bottomText,item:bottomItem}),list}return{getNowPlayingNames:getNowPlayingNames}});