// ----------------------------------------------------------------------------------------------------
// SCRIPTS - EVENTDATA
// ----------------------------------------------------------------------------------------------------
"use strict";

/*
var events = [
    [ 15,   'view-new',                     ['v-class-schedule', 'SCHEDULE','','NEXT CLASS'] ],
    [ 12,   'view-new',                     ['v-class-matrix', 'NEXT CLASS:','KING KONG','START'] ],
    [ 9,    'view-new',                     ['v-dual-gender-leaderboard', 'LEADERBOARD:','KING KONG','START'] ],
    [ 6,    'view-new',                     ['v-class-challenges', 'CLASS CHALLENGES:','KING KONG','START'] ],
    [ 3,    'station-new',                  [] ],
    [ 61,   'station-show',                 ['v-station1', '','','START'] ],
    [ 60,   'station-show-instructions',    [] ],
    [ 30,   'station-hide-instructions',    [] ]

];
*/

var events = [
    [ 1,    'station1-new',                 [] ],
    [ 15,   'station1-show',                ['v-station1', '','','START'] ],
    [ 14,   'station1-show-instructions',   [] ],
    [ 11,   'station1-competitor-arrives',  [] ],
    [ 8,    'station1-hide-instructions',   [] ],
    [ 5,    'station1-countdown',           [] ],
    [ 4,    'station1-update-flash-4',      [] ],
    [ 3,    'station1-show-personal-best',  [] ],
    [ 2,    'station1-update-flash-2',      [] ],
    [ 1,    'station1-update-flash-1',      [] ],
    [ 0,    'station1-go',                  [] ],

    [ 60,   'sprint1-start',                [] ],
    [ 60,   'sprint1-update',               ['1', '1', '1', '1'] ],
    [ 59,   'sprint1-update',               ['2', '1', '2', '1'] ],
    [ 58,   'sprint1-update',               ['3', '2', '3', '2'] ],
    [ 57,   'sprint1-update',               ['4', '2', '4', '2'] ],
    [ 56,   'sprint1-update',               ['4', '3', '4', '3'] ],
    [ 55,   'sprint1-update',               ['5', '3', '5', '3'] ],
    [ 54,   'sprint1-update',               ['5', '4', '5', '4'] ],
    [ 53,   'sprint1-update',               ['6', '4', '6', '4'] ],
    [ 52,   'sprint1-update',               ['7', '5', '7', '5'] ],
    [ 51,   'sprint1-update',               ['7', '5', '7', '5'] ],
    [ 50,   'sprint1-update',               ['8', '6', '8', '6'] ],
    [ 49,   'sprint1-update',               ['9', '6', '8', '6'] ],
    [ 48,   'sprint1-update',               ['9', '7', '9', '7'] ],
    [ 47,   'sprint1-update',               ['10', '7', '10', '7'] ],
    [ 46,   'sprint1-update',               ['10', '8', '10', '8'] ],
    [ 45,   'sprint1-update',               ['11', '8', '11', '8'] ],
    [ 44,   'sprint1-update',               ['11', '9', '12', '9'] ],
    [ 43,   'sprint1-update',               ['12', '9', '12', '9'] ],
    [ 42,   'sprint1-update',               ['12', '10', '13', '10'] ],
    [ 41,   'sprint1-update',               ['13', '11', '14', '10'] ],
    [ 40,   'sprint1-update',               ['13', '12', '14', '11'] ],
    [ 39,   'sprint1-update',               ['14', '13', '15', '11'] ],
    [ 38,   'sprint1-update',               ['14', '13', '16', '12'] ],
    [ 37,   'sprint1-update',               ['15', '14', '17', '12'] ],
    [ 36,   'sprint1-update',               ['15', '14', '17', '13'] ],
    [ 35,   'sprint1-update',               ['16', '15', '18', '13'] ],
    [ 34,   'sprint1-update',               ['16', '15', '19', '14'] ],
    [ 33,   'sprint1-update',               ['17', '16', '19', '14'] ],
    [ 32,   'sprint1-update',               ['17', '16', '20', '14'] ],
    [ 31,   'sprint1-update',               ['18', '17', '20', '15'] ],
    [ 30,   'sprint1-update',               ['18', '17', '21', '16'] ],
    [ 29,   'sprint1-update',               ['19', '18', '21', '16'] ],
    [ 28,   'sprint1-update',               ['19', '18', '22', '17'] ],
    [ 27,   'sprint1-update',               ['20', '19', '23', '17'] ],
    [ 26,   'sprint1-update',               ['20', '19', '24', '18'] ],
    [ 25,   'sprint1-update',               ['21', '20', '24', '18'] ],
    [ 24,   'sprint1-update',               ['22', '20', '25', '19'] ],
    [ 23,   'sprint1-update',               ['22', '21', '26', '19'] ],
    [ 22,   'sprint1-update',               ['23', '21', '26', '20'] ],
    [ 21,   'sprint1-update',               ['24', '22', '27', '21'] ],
    [ 20,   'sprint1-update',               ['24', '22', '28', '21'] ],
    [ 19,   'sprint1-update',               ['25', '23', '29', '22'] ],
    [ 18,   'sprint1-update',               ['25', '23', '30', '22'] ],
    [ 17,   'sprint1-update',               ['26', '24', '31', '23'] ],
    [ 16,   'sprint1-update',               ['26', '24', '32', '23'] ],
    [ 15,   'sprint1-update',               ['27', '25', '33', '24'] ],
    [ 14,   'sprint1-update',               ['27', '25', '33', '24'] ],
    [ 13,   'sprint1-update',               ['28', '26', '34', '25'] ],
    [ 12,   'sprint1-update',               ['29', '26', '35', '25'] ],
    [ 11,   'sprint1-update',               ['29', '27', '36', '26'] ],
    [ 10,   'sprint1-update',               ['30', '27', '37', '26'] ],
    [ 9,    'sprint1-update',               ['30', '28', '38', '27'] ],
    [ 8,    'sprint1-update',               ['31', '28', '39', '27'] ],
    [ 7,    'sprint1-update',               ['31', '29', '40', '28'] ],
    [ 6,    'sprint1-update',               ['32', '29', '40', '28'] ],
    [ 5,    'sprint1-update',               ['32', '30', '41', '29'] ],
    [ 4,    'sprint1-update',               ['33', '30', '42', '29'] ],
    [ 3,    'sprint1-update',               ['34', '31', '43', '30'] ],
    [ 2,    'sprint1-update',               ['34', '31', '43', '30'] ],
    [ 1,    'sprint1-update',               ['35', '32', '44', '31'] ],
    [ 0,    'sprint1-end',                  ['35', '32', '45', '32'] ],

    [ 10,   'rest1-start',                  [] ],
    [ 7,    'rest1-hide-flash',             [] ],
    [ 5,    'rest1-update-flash-5',         [] ],
    [ 4,    'rest1-update-flash-4',         [] ],
    [ 3,    'rest1-update-flash-3',         [] ],
    [ 2,    'rest1-update-flash-2',         [] ],
    [ 1,    'rest1-update-flash-1',         [] ],
    [ 0,    'rest1-end',                    [] ],

    [ 60,   'sprint2-start',                [] ],
    [ 60,   'sprint2-update',               ['36', '33', '46', '33'] ],
    [ 59,   'sprint2-update',               ['36', '33', '46', '33'] ],
    [ 58,   'sprint2-update',               ['37', '34', '47', '34'] ],
    [ 57,   'sprint2-update',               ['37', '34', '48', '34'] ],
    [ 56,   'sprint2-update',               ['38', '35', '48', '35'] ],
    [ 55,   'sprint2-update',               ['38', '35', '49', '35'] ],
    [ 54,   'sprint2-update',               ['39', '36', '49', '36'] ],
    [ 53,   'sprint2-update',               ['39', '36', '50', '36'] ],
    [ 52,   'sprint2-update',               ['40', '37', '51', '37'] ],
    [ 51,   'sprint2-update',               ['40', '37', '51', '37'] ],
    [ 50,   'sprint2-update',               ['41', '38', '52', '38'] ],
    [ 49,   'sprint2-update',               ['42', '38', '52', '38'] ],
    [ 48,   'sprint2-update',               ['42', '39', '53', '39'] ],
    [ 47,   'sprint2-update',               ['43', '39', '54', '39'] ],
    [ 46,   'sprint2-update',               ['43', '40', '54', '40'] ],
    [ 45,   'sprint2-update',               ['44', '40', '55', '40'] ],
    [ 44,   'sprint2-update',               ['44', '41', '56', '41'] ],
    [ 43,   'sprint2-update',               ['45', '41', '56', '41'] ],
    [ 42,   'sprint2-update',               ['45', '42', '57', '42'] ],
    [ 41,   'sprint2-update',               ['46', '43', '58', '42'] ],
    [ 40,   'sprint2-update',               ['46', '44', '58', '43'] ],
    [ 39,   'sprint2-update',               ['47', '45', '59', '43'] ],
    [ 38,   'sprint2-update',               ['47', '46', '60', '44'] ],
    [ 37,   'sprint2-update',               ['48', '46', '61', '44'] ],
    [ 36,   'sprint2-update',               ['48', '47', '61', '45'] ],
    [ 35,   'sprint2-update',               ['49', '48', '62', '45'] ],
    [ 34,   'sprint2-update',               ['49', '48', '63', '46'] ],
    [ 33,   'sprint2-update',               ['50', '49', '63', '46'] ],
    [ 32,   'sprint2-update',               ['50', '49', '64', '47'] ],
    [ 31,   'sprint2-update',               ['51', '50', '64', '47'] ],
    [ 30,   'sprint2-update',               ['51', '50', '65', '48'] ],
    [ 29,   'sprint2-update',               ['52', '51', '65', '49'] ],
    [ 28,   'sprint2-update',               ['52', '51', '66', '49'] ],
    [ 27,   'sprint2-update',               ['53', '52', '67', '50'] ],
    [ 26,   'sprint2-update',               ['53', '52', '68', '50'] ],
    [ 25,   'sprint2-update',               ['54', '53', '68', '51'] ],
    [ 24,   'sprint2-update',               ['55', '53', '69', '52'] ],
    [ 23,   'sprint2-update',               ['56', '54', '70', '53'] ],
    [ 22,   'sprint2-update',               ['57', '54', '70', '53'] ],
    [ 21,   'sprint2-update',               ['58', '55', '71', '54'] ],
    [ 20,   'sprint2-update',               ['58', '55', '72', '54'] ],
    [ 19,   'sprint2-update',               ['59', '56', '73', '55'] ],
    [ 18,   'sprint2-update',               ['59', '56', '74', '56'] ],
    [ 17,   'sprint2-update',               ['60', '57', '75', '57'] ],
    [ 16,   'sprint2-update',               ['60', '57', '76', '57'] ],
    [ 15,   'sprint2-update',               ['61', '58', '77', '58'] ],
    [ 14,   'sprint2-update',               ['61', '58', '77', '58'] ],
    [ 13,   'sprint2-update',               ['62', '59', '78', '59'] ],
    [ 12,   'sprint2-update',               ['62', '60', '79', '60'] ],
    [ 11,   'sprint2-update',               ['63', '60', '80', '61'] ],
    [ 10,   'sprint2-update',               ['63', '61', '81', '62'] ],
    [ 9,    'sprint2-update',               ['64', '62', '82', '62'] ],
    [ 8,    'sprint2-update',               ['65', '63', '83', '63'] ],
    [ 7,    'sprint2-update',               ['66', '64', '83', '64'] ],
    [ 6,    'sprint2-update',               ['67', '64', '84', '64'] ],
    [ 5,    'sprint2-update',               ['67', '65', '85', '65'] ],
    [ 4,    'sprint2-update',               ['68', '65', '86', '65'] ],
    [ 3,    'sprint2-update',               ['68', '66', '87', '66'] ],
    [ 2,    'sprint2-update',               ['69', '67', '87', '66'] ],
    [ 1,    'sprint2-update',               ['70', '68', '88', '67'] ],
    [ 0,    'sprint2-end',                  ['71', '68', '88', '67'] ],

    [ 120,  'station1end-start',            [] ],
    [ 118,  'station1end-hide-sprint-1',    [] ],
    [ 116,  'station1end-hide-sprint-2',    [] ],
    [ 113,  'station1end-hide-sprint-3',    [] ],
    [ 100,  'station1end-competitor-leaves',[] ]

];
