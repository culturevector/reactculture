import React, { Component } from 'react';

class Scripts extends Component {
    render() {
        return (
            <div>
                <script src="/js/lib/jquery.min.js"></script>
                <script src="/js/lib/bootstrap.min.js"></script>
                <script src="/js/lib/popper.min.js"></script>
                <script src="/js/main.js"></script>
                <script>
                    {`
                        (function (i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments)
                            }, i[r].l = 1 * new Date();
                            a = s.createElement(o),
                                m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                    ga('create', 'UA-XXXXX-X', 'auto');
                    ga('send', 'pageview');
                `}
            </script>
            </div>
        )
    }

}

export default Scripts;
