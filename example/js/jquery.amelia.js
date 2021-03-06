/*!
 * jQuery Amelia Plugin v1.0.0
 * (c) yanwarsolah@gmail.com
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function ($) {

    $.fn.ameliaMetaImages = function (options) {
        let settings = $.extend({
            reader: new FileReader(),
            allowedFiles: [
                "image/gif",
                "image/jpeg",
                "image/png",
                "application/pdf",
            ],
            allowedSize: 5e+6, // bytes (5 mb)
        }, options);

        this.on("change", function (ev) {

            settings.reader.onload = function (e) {
                if (ev.target.files[0].size <= settings.allowedSize &&
                    settings.allowedFiles.indexOf(ev.target.files[0].type)) {
                        settings.storage.push({
                            data: settings.reader.result.split(",")[1],
                            raw: settings.reader.result.split(","),
                            size: ev.target.files[0].size,
                            type: ev.target.files[0].type
                        });
                    }
                    else {
                        console.warn("Invalid File...");
                    }
            };

            settings.reader.readAsDataURL(ev.target.files[0]);
        });
    }

} (jQuery));
