
function MainFunction() 
{
    'use strict';

    let book_obj1 = {
        name: 'The alchemist',
        author: 'paulo Coelho',
        year: 1998,

    };

    let book_obj2 = {
        name: 'all the things i know',
        author: 'rachel gros',
        year: 2002,
        
    };

    let obj_utils = {
        GetFirstPublish: function (obj1, obj2) {
            if (obj1.year <= obj2.year)
            {
                return (obj1.name);
            }
            else
            {
                return (obj2.name);
            }
        },

        SetNewEdition: function (obj, edition) {
            obj.last_edition = edition;
            return (obj.last_edition)
        },

        SetNewLanguage: function (obj, language) {
            obj.language = language;
            console.log(obj);
        },

        SetTranslation: function (obj, language, translator) {
            obj.translation = {
                translator: translator,
                language: language,
            };
            console.log(obj);
        },

        SetPublisher: function (obj, name, location) {
            obj.publisher = {
                name: name,
                location: location,
            };
            console.log(obj);
        },

        IsSamePublisher: function (obj1,obj2) {
            if (obj1.publisher === obj2.publisher && obj1.name === obj2.name)
            {
                console.log(true);
            }
            else 
            {
                console.log(false);
            }
        },
    }

    console.log(obj_utils.GetFirstPublish(book_obj1, book_obj2));
    obj_utils.SetNewEdition(book_obj1, 2021);
    console.log(book_obj1);
    obj_utils.SetNewLanguage(book_obj2, 'Latin');
    obj_utils.SetTranslation(book_obj2, 'Hebrew', 'shirly');
    obj_utils.SetPublisher(book_obj1, 'daniel', 'australia');
    obj_utils.IsSamePublisher(book_obj1, book_obj2);


}; MainFunction();
