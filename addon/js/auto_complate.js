function showAutoComplate() {

    $("input.searchInput").bind("autocompleteselect", function (event, ui) {
        //console.log(ui.item.value.length);
        gotosearchpage();
    }).autocomplete(
        {
            appendTo: "#list",
            source: function (request, response) {
                if (request.term.length < 2) {
                    return;
                }

                //var u = "http://sugg.us.search.yahoo.net/gossip-us-ura/?output=sd1&command=" + request.term + "&nresults=5";
                var u = "http://sug.searchalgo.com/search/index_sg.php?q=" + request.term;
                $.ajax({
                    url: u,
                    dataType: "json",
                    data: {
                        featureClass: "P",
                        style: "full",
                        maxRows: 5,
                        name_startsWith: request.term
                    },

                    success: function (data) {
                        response($.map(data[1], function (item) {
                            return {
                                label: item,
                                value: item
                            }
                        }));
                    },
                });
            }
        }).data("ui-autocomplete")._renderItem = function (ul, item) {

        //debugger;
        return $("<li />").data("ui-autocomplete-item", escapeHTML(item)).append("<a>" + escapeHTML(item.label) + "</a>").appendTo(ul);
    };

}


$(document).ready(function () {
    showAutoComplate();
    $(".searchBtn").click(function () {
        gotosearchpage();
    });

    $(".searchInput").keydown(function (e) {
        if (e.which == 13) {
            gotosearchpage()
        }
    });

});


escapeHTML.replacements = {"&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;"};

function escapeHTML(str) {
    try {
        return str.replace(/[&"<>]/g, function (m) {
            escapeHTML.replacements[m]
        });
    } catch (e) {
        return str;
    }

    // str.replace(/[&"<>]/g, function (m) escapeHTML.replacements[m]);
}






