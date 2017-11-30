# Chrome extension to warn you if your mail seems like spam.

My goal was to build a decent Naive Bayes classifier, port it to Javascript and offer a Chrome extension for Gmail. However, I don't have experience with Chrome extensions and am having less time. If you would like to build it, I can help you with the classifier.  

## Requirements 
* Jupyter notebook
* Python 2.7
* Numpy

## Usage
* Check ```Classifier/SpamHam.ipynb``` for classifier code.
* Extract Dataset.pickle and load ```spam``` and ```ham``` from it. 
* Don't run the 2nd cell, it's for demonstration only. 

## Features
* Performed data cleaning.
* Naive Bayes written from scratch.
* Bag of words model.
* Laplace smoothing to handle unknown words.
* Hyperparameter search using holdout (validation) set.

## Results
* Overall test accuracy - 97%
* [Important] False positive rate - 0.5% (Only 5 mails falsely classified as spam for every ~2000 mails).

## Observations
* Naive bayes is simple but awesome.
* Comments on failure cases - 

| Mail contents | Comments |
| ---------- | -------- |
| ['subject', 'si', 'back', 'si', 'back', 'folsom'] | Mail too short classified as spam. |
| ['subject', 'congratulations', 'congratulations', 'expanded', 'role', 'hope', 'means', 'get', 'lots', 'money', 'fewer', 'hours'] | Highly likely that it is spam, unless sender knows the person  |
|['subject', 'please', 'note', 'new', 'email', 'address', 'effective', 'today', 'please', 'send', 'future', 'correspondence', 'staceykn', '@', 'yahoo', 'com', 'thanks'] | Legit failure. |
|['subject', 'registration', 'confirmation', 'spinner', 'com', 'thank', 'joining', 'spinner', 'com', 'web', 's', 'largest', 'source', 'free', 'streaming', 'music', 'just', 'wanted', 'confirm', 'registration', 'spinner', 'now', 'complete', 'access', 'spinner', 's', 'professionally', 'programmed', 'music', 'channels', 'entire', 'spinner', 'com', 'website', 'just', 'remind', 'player', 'website', '(', 'importantly', ')', 'music', 'totally', 'free', 'user', 'name', 'junglo', 'omitted', 'password', 'privacy', 'please', 'hang', 'email', 'can', 'easily', 'retrieve', 'user', 'name', 'forget', 'forget', 'password', '?', 'enter', 'user', 'name', 'email', 'address', 'password', 'retrieval', 'page', 'll', 'email', 'can', 'also', 'change', 'email', 'address', 'profile', 'page', 'http', 'www', 'spinner', 'com', 'profile', 'download', 'installation', 'assistance', 'visit', 'help', 'pages', 'http', 'www', 'spinner', 'com', 'help', 'download', 'questions', 'problems', 'please', 'email', 'us', 'feedback', '@', 'spinner', 'com', 'users', 'listen', 'million', 'songs', 'week', 'almost', 'every', 'genre', 'music', 'can', 'imagine', 'also', 'learn', 'everything', 'hear', 'clicking', 'player', 'get', 'bios', 'every', 'artist', 'hear', 'clicking', '"', 'artist', 'info', '"', 'purchase', 'cds', 'clicking', '"', 'buy', 'cd', '"', 'click', '"', 'rate', 'song', '"', 'let', 'djs', 'know', 'think', 'song', 'hear', 'll', 'use', 'feedback', 'determine', 'song', 'play', 'click', '"', 'channel', '"', 'see', 'week', 's', 'top', 'songs', 'channel', 're', 'playing', 'ranked', 'order', 'popularity', 'even', 'great', 'info', 'channels', 'music', 'visit', 'spinner', 'com', 'can', 'find', 'channels', 'play', 'favorite', 'artists', 'download', 'great', 'free', 'songs', 'take', 'part', 'cool', 'promotions', 'contests', 'thanks', 'registering', 'like', 'hear', 'tell', 'friend', 'spinner', 'enjoy', 'music', 'spinner', 'crew', 'received', 'email', 'error', 'can', 'unsubscribe', 'service', 'http', 'www', 'spinner', 'com', 'unsubscribe']| Legit failure. Contains a lot of 'password' and 'free' and 'download' |
|['subject', 'registration', 'confirmation', 'yahoo', 'account', 'information', 'help', 'reply', 'message', 'request', 'account', 'click', 'registration', 'confirmed', 'welcome', 'yahoo', 'message', 'confirms', 'new', 'account', 'yahoo', '?', 'yahoo', 'id', 'mpfarmer', 'email', 'address', 'dfarmer', '@', 'enron', 'com', '?', 'email', 'address', 'listed', 'incorrect', 'changes', 'future', '?', 'please', 'keep', 'email', 'contact', 'current', 'can', 'help', 'case', 'can', 't', 'access', 'yahoo', 'account', 'update', 'email', 'address', 'first', 'sign', 'yahoo', 'yahoo', 'personalized', 'service', 'click', '"', 'account', 'info', '"', 'top', 'page', '(', '"', 'account', 'info', '"', 'available', 'please', 'click', '"', 'options', '"', 'first', '"', 'account', 'info', '"', ')', 'field', 'need', 'change', 'called', '"', 'alternate', 'email', 'address', '"', '?', 'can', 'new', 'yahoo', 'id', '?', 'yahoo', 'mail', 'yahoo', 'mail', 'get', 'yahoo', 'com', 'email', 'address', 'yahoo', 'auctions', 'yahoo', 'auctions', 'buy', 'sell', 'free', '[', 'image', ']', 'yahoo', 'chat', 'chat', 'people', 'world', 'yahoo', 'calendar', 'yahoo', 'calendar', 'keep', 'organized', 'yahoo', 'yahoo', 'customize', 'way', 'use', 'internet', 'yahoo', 'games', 'yahoo', 'games', 'new', 'classic', 'online', 'games', 'yahoo', 'travel', 'yahoo', 'travel', 'reservations', 'tickets', 'discounts', 'information', 'yahoo', 'shopping', 'yahoo', 'shopping', 'search', 'favorite', 'products', 'brands', 'compare', 'prices', 'yahoo', 'messenger', 'yahoo', 'messenger', 'get', 'notified', 'new', 'mail', 'send', 'instant', 'messages', 'show', 'thank', 'signing', 'yahoo', '?', 'didn', 't', 'request', 'account', '?', 'please', 'click', 'didn', 't', 'request', 'longer', 'wish', 'prompted', 'deletion', 'key', 'please', 'cut', 'paste', 'following', 'text', 'box', 'requested', 'deletion', 'page', 'also', 'reply', 'email', '(', 'make', 'sure', 'copy', 'entire', 'email', 'reply', ')', 'remove', 'subject', 'line', '[', ']'] | Legit failure. |
|['subject', 'amazon', 'com', 'order', '(', '#', ')', 'greetings', 'amazon', 'com', 'thought', 'd', 'like', 'know', 'shipped', 'items', 'today', 'completes', 'order', 'thanks', 'shopping', 'amazon', 'com', 'hope', 'see', 'soon', 'can', 'track', 'status', 'order', 'orders', 'online', 'visiting', '"', 'account', '"', 'page', 'http', 'www', 'amazon', 'com', 'account', 'can', 'track', 'order', 'shipment', 'status', 'review', 'estimated', 'delivery', 'dates', 'cancel', 'unshipped', 'items', 'return', 'items', 'much', 'following', 'items', 'included', 'shipment', 'qty', 'item', 'price', 'shipped', 'subtotal', 'dewalt', 'dw', 'k', 'volt', '"', '$', '$', 'item', 'subtotal', '$', 'shipping', '&', 'handling', '$', 'total', '$', 'paid', 'via', 'mastercard', '$', 'paid', 'via', 'gift', 'certificate', 'usd', '(', 'privacy', 'reasons', 'recipient', 's', 'address', 'shown', ')', 've', 'explored', 'links', '"', 'account', '"', 'page', 'still', 'need', 'get', 'touch', 'us', 'order', 'e', 'mail', 'us', 'orders', '@', 'amazon', 'com', 'next', 'visit', 'web', 'site', 'come', 'see', 's', 'new', 'clicking', 'link', 'right', 'hand', 'side', 'home', 'page', 'visiting', 'url', 'cs', '_', 'ae', '_', 'nfy', 've', 'selected', 'assortment', 'new', 'releases', 'recommendations', 'informative', 'articles', 'think', 'appeal', 'thank', 'shopping', 'amazon', 'com', 'amazon', 'com', 'earth', 's', 'biggest', 'selection', 'orders', '@', 'amazon', 'com', 'http', 'www', 'amazon', 'com']||
|['subject', 'singles', 'debate', 'hey', 'check', 'dude', 'smashing', 'pumkins', 'song', 'drown', 'can', 't', 'find', 'cd', 'whaz', '?', '?']|Seriously, how is this not spam? |
|['subject', 'valpak', 'com', '"', 'print', 'later', '"', 'link', 'link', 'print', 'ready', 'valpak', 'com', 'savings', 'page', 'requested', 'link', 'will', 'remain', 'active', 'next', 'hours', 'may', 'print', 'convenience', 'click', 'print', 'saved', 'couponsshare', 'good', 'savings', 'sense', 'forward', 'link', 'friend', 'can', 'print', 'save']| Legit failure. |

## References
* https://hackernoon.com/how-to-build-a-simple-spam-detecting-machine-learning-classifier-4471fe6b816e
